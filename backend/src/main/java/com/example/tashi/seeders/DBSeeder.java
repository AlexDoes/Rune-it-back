package com.example.tashi.seeders; 

import com.example.tashi.models.Quest;
import com.example.tashi.models.User;
import com.example.tashi.repository.QuestRepository;
import com.example.tashi.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@Component
public class DBSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final QuestRepository questRepository;

    public DBSeeder(UserRepository userRepository, QuestRepository questRepository) {
        this.userRepository = userRepository;
        this.questRepository = questRepository;
    }

    @Override
    public void run(String... args) {
      
        userRepository.deleteAll();
        // questRepository.deleteAll();

       
         List<Quest> quests = new ArrayList<>();
         
    // String[][] arrays = {
    //         {
    //             "strengthXp",
    //             "defenceXp",
    //             "rangedXp",
    //             "prayerXp",
    //             "magicXp",
    //             "runecraftXp",
    //             "hitpointsXp",
    //             "craftingXp"
    //         },
    //         {
    //             "miningXp",
    //             "smithingXp",
    //             "fishingXp",
    //             "cookingXp",
    //             "firemakingXp",
    //             "woodcuttingXp",
    //             "agilityXp"
    //         },
    //         {
    //             "herbloreXp",
    //             "thievingXp",
    //             "fletchingXp",
    //             "slayerXp",
    //             "farmingXp"
    //         },
    //         {
    //             "constructionXp",
    //             "hIntegerunterXp"
    //         },
    //         {
    //             "strengthXp",
    //             "defenceXp",
    //             "hitpointsXp",
    //             "miningXp",
    //             "cookingXp",
    //             "herbloreXp",
    //             "fletchingXp",
    //             "farmingXp",
    //             "hIntegerunterXp"
    //         }
    // };
    

    Quest quest1 = new Quest();
    quest1.setName("alex");
    questRepository.save(quest1);
    quests.add(quest1);

        // for (int i = 0; i < 5; i++) {
        //     Quest quest = new Quest();
        //     quest.setName("Test Quest " + i);
        //     quest.setDescription("This is a test quest number " + i + ".");
        //     quest.setReward("Test Reward " + i);
        //     quest.setQuestFields(generateRandomQuestFields(arrays[i])); // You probably want a new Map for each quest

       
        //     questRepository.save(quest);

        //     quests.add(quest);
        // }

        // Quest quest2 = new Quest();
        // quest2.setName("Test Quest " + 1);
        // questRepository.save(quest2);
        // quests.add(quest2);
     
        for (int i = 0; i < 5; i++) {
            User user = new User();
            var number = i + "";
            user.setId(number);
            user.setUsername("testUser" + i);
            user.setPassword("password" + i);
            user.setEmail("test" + i + "@test.com");

            for (Quest quest : quests) {
                user.addNotStartedQuest(quest);
            }

            userRepository.save(user);
        }
    }
 


    // public Map<String, Integer> generateRandomQuestFields( String[] skills) {
    //     Random rand = new Random();

    //     Map<String, Integer> questFields = new HashMap<>();


    //     for (String skill : skills) {
    //         questFields.put(skill, rand.nextInt(100));
    //     }

    //     return questFields;
    // }
}