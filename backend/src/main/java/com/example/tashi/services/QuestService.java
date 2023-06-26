package com.example.tashi.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.example.tashi.models.Quest;  
import com.example.tashi.repository.QuestRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service 
public class QuestService {

    @Autowired
    private QuestRepository questRepository;
    public List<Quest> getAllQuest() {
        return questRepository.findAll();
    }

}
