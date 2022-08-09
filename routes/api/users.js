const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../../models/Users');
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys');
const validateLoginInput = require('../../validation/login')
const validateSignupInput = require('../../validation/signup');
const passport = require('passport');
const res = require("express/lib/response");
const req = require("express/lib/request");
const { request, response } = require("express");

router.get("/test", (request,response) => response.json({ msg: " Test Route."}))

router.post('/signup', (request,response) => {
    console.log(request)
    const { errors, isValid } = validateSignupInput(request.body);

    if (!isValid) {
        return response.status(400).json(errors)
    }

    User.findOne({ email: request.body.email })
        .then( user => {
            if (user) {
                errors.email = 'There is already an account associated with this email'
                return response.status(400).json(errors);
            } else {
                const newUser = new User({
                    email: request.body.email,
                    password: request.body.password,
                    handle: request.body.handle
            })

            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(newUser.password, salt, (error, hash) => {
                    if (error) throw error;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => response.json(user))
                        .catch(error => console.log(error));
                })
            })
        }
    })
})

router.post('/login', (request, response) => {
    const {errors, isValid} = validateLoginInput(request.body)

    if(!isValid) {
        return response.status(400).json(errors);
    }

    // const email = request.body.email;
    const password = request.body.password;
    User.findOne({ email: request.body.email })
        .then(user => {
            if (!user) {
                return response.status(404).json({ email: `There is no account associated with ${email}! Please sign up!`})
            }

            bcrypt.compare(password, user.password)
                .then( authorized =>  {
                    if (authorized) {
                        const payload = {id: user.id, email: user.email, handle: user.handle, bio: user.bio};
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 36000},
                            (error, token) => {
                                response.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                })
                            });
                    } else {
                        return response.status(400).json({password: 'Invalid email and password combination!'});
                }
            })
    })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({id: req.user.id,
            handle: req.user.handle,
            email: req.user.email
        });
})

router.get('/:id', (request,response) => {
    User.findById(request.params.id)
    .then(user => response.json(user))
    .catch(errors => response.json(errors))
})

router.patch('/:id', passport.authenticate('jwt', {session: false}), (request, response) => {
    User.findOneAndUpdate( {_id : request.params.id }, {$set: { handle : request.body.handle, bio : request.body.bio }})
    .then(user => response.json(user))
    .catch(errors => response.json(errors))
})

router.delete('/:id', passport.authenticate('jwt', {session: false}), (request, response) => {
    User.deleteOne({"_id": request.params.id})
    .then(user => response.status(400).json({message: "successfully deleted"}))
    .catch(errors => response.json(errors))
})


module.exports = router