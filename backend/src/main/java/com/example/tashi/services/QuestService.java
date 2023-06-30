package com.example.tashi.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.example.tashi.models.Quest;  
import com.example.tashi.repository.QuestRepository;
import com.example.tashi.repository.UserRepository; 
import org.springframework.beans.factory.annotation.Autowired;
import com.example.tashi.models.User;


@Service 
public class QuestService {

    @Autowired
    private QuestRepository questRepository;
    private UserRepository userRepository;

    public List<Quest> getAllQuest() {
        return questRepository.findAll();
    }

    public Quest createQuest(Quest quest, String userId) {
        return questRepository.save(quest);
    }

}
