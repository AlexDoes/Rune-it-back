package com.example.tashi.classes;
import com.example.tashi.models.Quest;


public class QuestData {

    private Quest quest;
    private String userId;

    // getters and setters

    public Quest getQuest() {
        return quest;
    }

    public void setQuest(Quest quest) {
        this.quest = quest;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}