package com.example.tashi.services;


import java.util.List;

import org.springframework.stereotype.Service;
import com.example.tashi.models.Quest;  
import com.example.tashi.repository.QuestRepository;
import com.example.tashi.repository.UserRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.tashi.models.User;
import com.example.tashi.classes.UserNotFoundException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private QuestRepository questRepository;


    public User getEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User updateUser(User updatedUserInfo, String email) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new UserNotFoundException("User with email " + email + " not found");
        } else {
            BeanUtils.copyProperties(updatedUserInfo, user, "email");
            return userRepository.save(user);
        }
    }
}
