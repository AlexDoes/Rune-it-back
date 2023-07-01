package com.example.tashi.models;
// import java.util.UUID;

import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.aggregation.ArrayOperators.In;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.HashMap;
import java.util.Map;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "quests")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Quest {
    @Id
    private String id;
    private String name;
    private Map<String, Integer> experience = new HashMap<>();
    private int questPoints;

    public Quest(String name, Map<String, Integer> experience, int questPoints, String id) {
        this.name = name;
        this.experience = experience;
        this.questPoints = questPoints;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Integer> getExperience() {
        return experience;
    }

    public void setExperience(Map<String, Integer> experience) {
        this.experience = experience;
    }

    public int getQuestPoints() {
        return questPoints;
    }

    public void setQuestPoints(int questPoints) {
        this.questPoints = questPoints;
    }
}
