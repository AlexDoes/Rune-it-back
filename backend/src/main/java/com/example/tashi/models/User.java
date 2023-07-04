package com.example.tashi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;
import java.util.Map;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class User {

    @Id
    private String id;
    private String username;
    private String email;
    private Integer totalXP = 0;
    private Integer totalQuestPoints = 0;
    // private UUID id = UUID.randomUUID();

    // @DBRef
    private List<String> completedQuests = new ArrayList<>();

    private Map<String, Integer> skillXP;

    // public void populateXp() {
    //     skillXP = new HashMap<>();
    //     skillXP.put("Agility", Agility);
    //     skillXP.put("Attack", Attack);
    //     skillXP.put("Construction", Construction);
    //     skillXP.put("Cooking", Cooking);
    //     skillXP.put("Crafting", Crafting);
    //     skillXP.put("Defence", Defence);
    //     skillXP.put("Farming", Farming);
    //     skillXP.put("Fletching", Fletching);
    //     skillXP.put("Firemaking", Firemaking);
    //     skillXP.put("Fishing", Fishing);
    //     skillXP.put("Herblore", Herblore);
    //     skillXP.put("Hitpoints", Hitpoints);
    //     skillXP.put("Hunter", Hunter);
    //     skillXP.put("Magic", Magic);
    //     skillXP.put("Mining", Mining);
    //     skillXP.put("Prayer", Prayer);
    //     skillXP.put("Ranged", Ranged);
    //     skillXP.put("Runecraft", Runecraft);
    //     skillXP.put("Slayer", Slayer);
    //     skillXP.put("Smithing", Smithing);
    //     skillXP.put("Strength", Strength);
    //     skillXP.put("Thieving", Thieving);
    //     skillXP.put("Woodcutting", Woodcutting);
    // }

    private Integer Agility = 0;
    private Integer Attack = 0;
    private Integer Construction = 0;
    private Integer Cooking = 0;
    private Integer Crafting = 0;
    private Integer Defence = 0;
    private Integer Farming = 0;
    private Integer Fletching = 0;
    private Integer Firemaking = 0;
    private Integer Fishing = 0;
    private Integer Herblore = 0;
    private Integer Hitpoints = 0;
    private Integer Hunter = 0;
    private Integer Magic = 0;
    private Integer Mining = 0;
    private Integer Prayer = 0;
    private Integer Ranged = 0;
    private Integer Runecraft = 0;
    private Integer Slayer = 0;
    private Integer Smithing = 0;
    private Integer Strength = 0;
    private Integer Thieving = 0;
    private Integer Woodcutting = 0;

 

    // public User(String username, String password, String email, int totalXp,
    // int attackXp, int strengthXp, int defenceXp, int rangedXp, int prayerXp, int magicXp, int runecraftXp, int hitpointsXp, int craftingXp, int miningXp, int smithingXp, int fishingXp, int cookingXp, int firemakingXp, int woodcuttingXp, int agilityXp, int herbloreXp, int thievingXp, int fletchingXp, int slayerXp, int farmingXp, int constructionXp, int hunterXp
    // ){
    //     this.username = username;
    //     this.email = email;
    //     this.totalXp = totalXp;
    //     this.attackXp = attackXp;
    //     this.strengthXp = strengthXp;
    //     this.defenceXp = defenceXp;
    //     this.rangedXp = rangedXp;
    //     this.prayerXp = prayerXp;
    //     this.magicXp = magicXp;
    //     this.runecraftXp = runecraftXp;
    //     this.hitpointsXp = hitpointsXp;
    //     this.craftingXp = craftingXp;
    //     this.miningXp = miningXp;
    //     this.smithingXp = smithingXp;
    //     this.fishingXp = fishingXp;
    //     this.cookingXp = cookingXp;
    //     this.firemakingXp = firemakingXp;
    //     this.woodcuttingXp = woodcuttingXp;
    //     this.agilityXp = agilityXp;
    //     this.herbloreXp = herbloreXp;
    //     this.thievingXp = thievingXp;
    //     this.fletchingXp = fletchingXp;
    //     this.slayerXp = slayerXp;
    //     this.farmingXp = farmingXp;
    //     this.constructionXp = constructionXp;
    //     this.hunterXp = hunterXp;
    // }

    // public void addCompletedQuest(Quest quest) {
    //     this.completedQuests.add(quest);
    // }

    // public void addInProgressQuest(Quest quest) {
    //     this.inProgressQuests.add(quest);
    // }

    // public void addNotStartedQuest(Quest quest) {
    //     this.notStartedQuests.add(quest);
    // }

    // public void removeCompletedQuest(Quest quest) {
    //     this.completedQuests.remove(quest);
    // }

    // getters and setters

//     public String getId() {
//         return this.id;
//     }

//     public String getUsername() {
//         return this.username;
//     }

//     public String getEmail(){
//         return this.email;
//     }

//     public Integer getTotalXp(){
//         return this.totalXp;
//     }

//     public List<Quest> getCompletedQuests(){
//         return this.completedQuests;
//     }

//     public List<Quest> getInProgressQuests(){
//         return this.inProgressQuests;
//     }

//     public List<Quest> getNotStartedQuests(){
//         return this.notStartedQuests;
//     }

//     // Getters and Setters for skills

//     public int getAttackXp() {
//         return attackXp;
//     }

//     public int getStrengthXp() {
//         return strengthXp;
//     }

//     public int getDefenceXp() {
//         return defenceXp;
//     }

//     public int getRangedXp() {
//         return rangedXp;
//     }

//     public int getPrayerXp() {
//         return prayerXp;
//     }

//     public int getMagicXp() {
//         return magicXp;
//     }

//     public int getRunecraftXp() {
//         return runecraftXp;
//     }

//     public int getHitpointsXp() {
//         return hitpointsXp;
//     }

//     public int getCraftingXp() {
//         return craftingXp;
//     }

//     public int getMiningXp() {
//         return miningXp;
//     }

//     public int getSmithingXp() {
//         return smithingXp;
//     }

//     public int getFishingXp() {
//         return fishingXp;
//     }

//     public int getCookingXp() {
//         return cookingXp;
//     }

//     public int getFiremakingXp() {
//         return firemakingXp;
//     }

//     public int getWoodcuttingXp() {
//         return woodcuttingXp;
//     }

//     public int getAgilityXp() {
//         return agilityXp;
//     }

//     public int getHerbloreXp() {
//         return herbloreXp;
//     }

//     public int getThievingXp() {
//         return thievingXp;
//     }

//     public int getFletchingXp() {
//         return fletchingXp;
//     }

//     public int getSlayerXp() {
//         return slayerXp;
//     }

//     public int getFarmingXp() {
//         return farmingXp;
//     }

//     public int getConstructionXp() {
//         return constructionXp;
//     }

//     public int getHunterXp() {
//         return hunterXp;
//     }

//     public void setId(String id) {
//         this.id = id;
//     }

//     public void setTotalXp(int totalXp) {
//         this.totalXp = totalXp;
//     }

//     public void setAttackXp(int attackXp) {
//         this.attackXp = attackXp;
//     }

//     public void setStrengthXp(int strengthXp) {
//         this.strengthXp = strengthXp;
//     }

//     public void setDefenceXp(int defenceXp) {
//         this.defenceXp = defenceXp;
//     }

//     public void setRangedXp(int rangedXp) {
//         this.rangedXp = rangedXp;
//     }

//     public void setPrayerXp(int prayerXp) {
//         this.prayerXp = prayerXp;
//     }

//     public void setMagicXp(int magicXp) {
//         this.magicXp = magicXp;
//     }

//     public void setRunecraftXp(int runecraftXp) {
//         this.runecraftXp = runecraftXp;
//     }

//     public void setHitpointsXp(int hitpointsXp) {
//         this.hitpointsXp = hitpointsXp;
//     }

//     public void setCraftingXp(int craftingXp) {
//         this.craftingXp = craftingXp;
//     }

//     public void setMiningXp(int miningXp) {
//         this.miningXp = miningXp;
//     }

//     public void setSmithingXp(int smithingXp) {
//         this.smithingXp = smithingXp;
//     }

//     public void setFishingXp(int fishingXp) {
//         this.fishingXp = fishingXp;
//     }

//     public void setCookingXp(int cookingXp) {
//         this.cookingXp = cookingXp;
//     }

//     public void setFiremakingXp(int firemakingXp) {
//         this.firemakingXp = firemakingXp;
//     }

//     public void setWoodcuttingXp(int woodcuttingXp) {
//         this.woodcuttingXp = woodcuttingXp;
//     }

//     public void setAgilityXp(int agilityXp) {
//         this.agilityXp = agilityXp;
//     }

//     public void setHerbloreXp(int herbloreXp) {
//         this.herbloreXp = herbloreXp;
//     }

//     public void setThievingXp(int thievingXp) {
//         this.thievingXp = thievingXp;
//     }

//     public void setFletchingXp(int fletchingXp) {
//         this.fletchingXp = fletchingXp;
//     }

//     public void setSlayerXp(int slayerXp) {
//         this.slayerXp = slayerXp;
//     }

//     public void setFarmingXp(int farmingXp) {
//         this.farmingXp = farmingXp;
//     }

//     public void setConstructionXp(int constructionXp) {
//         this.constructionXp = constructionXp;
//     }

//     public void setHunterXp(int hunterXp) {
//         this.hunterXp = hunterXp;
//     }

}
