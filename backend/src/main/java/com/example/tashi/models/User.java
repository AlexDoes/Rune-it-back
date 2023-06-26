package com.example.tashi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class User {
    @Id
    // private UUID id = UUID.randomUUID();
    private String id;
    private String username;
    private String password;
    private String email;
    private Integer totalXp = 0;

    @DBRef
    private List<Quest> completedQuests = new ArrayList<>();
    private List<Quest> inProgressQuests = new ArrayList<>();
    private List<Quest> notStartedQuests = new ArrayList<>();


    private Integer attackXp = 0;
    private Integer strengthXp = 0;
    private Integer defenceXp = 0;
    private Integer rangedXp = 0;
    private Integer prayerXp = 0;
    private Integer magicXp = 0;
    private Integer runecraftXp = 0;
    private Integer hitpointsXp = 0;
    private Integer craftingXp = 0;
    private Integer miningXp = 0;
    private Integer smithingXp = 0;
    private Integer fishingXp = 0;
    private Integer cookingXp = 0;
    private Integer firemakingXp = 0;
    private Integer woodcuttingXp = 0;
    private Integer agilityXp = 0; 
    private Integer herbloreXp = 0;
    private Integer thievingXp= 0;
    private Integer fletchingXp = 0;
    private Integer slayerXp = 0;
    private Integer farmingXp = 0;
    private Integer constructionXp = 0;
    private Integer hunterXp= 0;
 
 


    public void addCompletedQuest(Quest quest) {
        this.completedQuests.add(quest);
    }

    public void addInProgressQuest(Quest quest) {
        this.inProgressQuests.add(quest);
    }

    public void addNotStartedQuest(Quest quest) {
        this.notStartedQuests.add(quest);
    }

    public void removeCompletedQuest(Quest quest) {
        this.completedQuests.remove(quest);
    }


}
