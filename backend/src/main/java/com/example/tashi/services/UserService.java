package com.example.tashi.services;


import java.util.List;

import org.springframework.stereotype.Service;
import com.example.tashi.models.Quest;  
import com.example.tashi.repository.QuestRepository;
import com.example.tashi.repository.UserRepository; 
import org.springframework.beans.factory.annotation.Autowired;
import com.example.tashi.models.User;


public class UserService {
    @Autowired
    private UserRepository userRepository;
    private QuestRepository questRepository;


    
}
