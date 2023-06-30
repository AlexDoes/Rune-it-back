package com.example.tashi.services;

import java.util.Collection;
import java.util.List;
import java.util.Map;

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

    public void saveQuestData(Map<String, Quest> questData) {
        Collection<Quest> quests = questData.values();
        questRepository.saveAll(quests);
    }

    public List<Quest> getAllQuests() {
        return questRepository.findAll();
    }

    public Quest getQuestByName(String name) {
        return questRepository.findById(name).orElse(null);
    }

    public void updateQuest(Quest quest) {
        questRepository.save(quest);
    }

    public void deleteQuest(Quest quest) {
        questRepository.delete(quest);
    }

}