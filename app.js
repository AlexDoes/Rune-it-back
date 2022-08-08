const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const db = require(`./config/keys`)

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get(`/`,(request,response) => {
    response.send(`<img width=100% height=100%
    src=https://i.kym-cdn.com/entries/icons/original/000/033/108/Screen_Shot_2020-03-06_at_3.25.32_PM.jpg
    >`);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

