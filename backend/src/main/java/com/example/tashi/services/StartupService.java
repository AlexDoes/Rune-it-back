package com.example.tashi.services;
import java.io.File;
import java.util.Map;

import com.example.tashi.models.Quest;
import com.example.tashi.repository.QuestRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Service;




@Service
public class StartupService implements ApplicationRunner {
    private final QuestService questService;

    public StartupService(QuestService questService) {
        this.questService = questService;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("backend/src/main/resources/questdata.json");
        TypeReference<Map<String, Quest>> typeReference = new TypeReference<>() {};
        Map<String, Quest> questData = objectMapper.readValue(file, typeReference);
        questService.saveQuestData(questData);
    }
}