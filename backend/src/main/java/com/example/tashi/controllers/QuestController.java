package com.example.tashi.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.tashi.models.Quest;
import com.example.tashi.services.QuestService;

@RestController
@RequestMapping("/api")
public class QuestController {
    @Autowired
    private QuestService questService;

    @GetMapping("/quests")
    public ResponseEntity<List<Quest>> getAllQuest() {
        
        return new ResponseEntity<List<Quest>>(questService.getAllQuest(), HttpStatus.OK);
    }
    
}
