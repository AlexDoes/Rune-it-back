package com.example.tashi.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.tashi.classes.QuestData;
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

// @PostMapping("/quests")
// public ResponseEntity<Quest> createQuest(@RequestBody Map<String, Object> questData) {
//     Quest quest = (Quest) questData.get("quest");
//     String userId = (String) questData.get("userId");
//     System.out.println(quest);
//     System.out.println(userId);
//     return new ResponseEntity<Quest>(questService.createQuest(quest, userId), HttpStatus.CREATED);
// }
    

@PostMapping("/quests")
public ResponseEntity<Quest> createQuest(@RequestBody QuestData questData) {
    return new ResponseEntity<>(questService.createQuest(questData.getQuest(), questData.getUserId()), HttpStatus.CREATED);
}
}

 