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
    private String id;
    private String username;
    private String password;
    private String email;
    private Integer totalXp = 0;
    // private UUID id = UUID.randomUUID();

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
 

    public User(String username, String password, String email, int totalXp,
    int attackXp, int strengthXp, int defenceXp, int rangedXp, int prayerXp, int magicXp, int runecraftXp, int hitpointsXp, int craftingXp, int miningXp, int smithingXp, int fishingXp, int cookingXp, int firemakingXp, int woodcuttingXp, int agilityXp, int herbloreXp, int thievingXp, int fletchingXp, int slayerXp, int farmingXp, int constructionXp, int hunterXp
    ){
        this.username = username;
        this.password = password;
        this.email = email;
        this.totalXp = totalXp;
        this.attackXp = attackXp;
        this.strengthXp = strengthXp;
        this.defenceXp = defenceXp;
        this.rangedXp = rangedXp;
        this.prayerXp = prayerXp;
        this.magicXp = magicXp;
        this.runecraftXp = runecraftXp;
        this.hitpointsXp = hitpointsXp;
        this.craftingXp = craftingXp;
        this.miningXp = miningXp;
        this.smithingXp = smithingXp;
        this.fishingXp = fishingXp;
        this.cookingXp = cookingXp;
        this.firemakingXp = firemakingXp;
        this.woodcuttingXp = woodcuttingXp;
        this.agilityXp = agilityXp;
        this.herbloreXp = herbloreXp;
        this.thievingXp = thievingXp;
        this.fletchingXp = fletchingXp;
        this.slayerXp = slayerXp;
        this.farmingXp = farmingXp;
        this.constructionXp = constructionXp;
        this.hunterXp = hunterXp;
    }

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

    // getters and setters

    public String getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public String getEmail(){
        return this.email;
    }

    public Integer getTotalXp(){
        return this.totalXp;
    }

    public List<Quest> getCompletedQuests(){
        return this.completedQuests;
    }

    public List<Quest> getInProgressQuests(){
        return this.inProgressQuests;
    }

    public List<Quest> getNotStartedQuests(){
        return this.notStartedQuests;
    }

    // Getters and Setters for skills

    public int getAttackXp() {
        return attackXp;
    }

    public int getStrengthXp() {
        return strengthXp;
    }

    public int getDefenceXp() {
        return defenceXp;
    }

    public int getRangedXp() {
        return rangedXp;
    }

    public int getPrayerXp() {
        return prayerXp;
    }

    public int getMagicXp() {
        return magicXp;
    }

    public int getRunecraftXp() {
        return runecraftXp;
    }

    public int getHitpointsXp() {
        return hitpointsXp;
    }

    public int getCraftingXp() {
        return craftingXp;
    }

    public int getMiningXp() {
        return miningXp;
    }

    public int getSmithingXp() {
        return smithingXp;
    }

    public int getFishingXp() {
        return fishingXp;
    }

    public int getCookingXp() {
        return cookingXp;
    }

    public int getFiremakingXp() {
        return firemakingXp;
    }

    public int getWoodcuttingXp() {
        return woodcuttingXp;
    }

    public int getAgilityXp() {
        return agilityXp;
    }

    public int getHerbloreXp() {
        return herbloreXp;
    }

    public int getThievingXp() {
        return thievingXp;
    }

    public int getFletchingXp() {
        return fletchingXp;
    }

    public int getSlayerXp() {
        return slayerXp;
    }

    public int getFarmingXp() {
        return farmingXp;
    }

    public int getConstructionXp() {
        return constructionXp;
    }

    public int getHunterXp() {
        return hunterXp;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTotalXp(int totalXp) {
        this.totalXp = totalXp;
    }

    public void setAttackXp(int attackXp) {
        this.attackXp = attackXp;
    }

    public void setStrengthXp(int strengthXp) {
        this.strengthXp = strengthXp;
    }

    public void setDefenceXp(int defenceXp) {
        this.defenceXp = defenceXp;
    }

    public void setRangedXp(int rangedXp) {
        this.rangedXp = rangedXp;
    }

    public void setPrayerXp(int prayerXp) {
        this.prayerXp = prayerXp;
    }

    public void setMagicXp(int magicXp) {
        this.magicXp = magicXp;
    }

    public void setRunecraftXp(int runecraftXp) {
        this.runecraftXp = runecraftXp;
    }

    public void setHitpointsXp(int hitpointsXp) {
        this.hitpointsXp = hitpointsXp;
    }

    public void setCraftingXp(int craftingXp) {
        this.craftingXp = craftingXp;
    }

    public void setMiningXp(int miningXp) {
        this.miningXp = miningXp;
    }

    public void setSmithingXp(int smithingXp) {
        this.smithingXp = smithingXp;
    }

    public void setFishingXp(int fishingXp) {
        this.fishingXp = fishingXp;
    }

    public void setCookingXp(int cookingXp) {
        this.cookingXp = cookingXp;
    }

    public void setFiremakingXp(int firemakingXp) {
        this.firemakingXp = firemakingXp;
    }

    public void setWoodcuttingXp(int woodcuttingXp) {
        this.woodcuttingXp = woodcuttingXp;
    }

    public void setAgilityXp(int agilityXp) {
        this.agilityXp = agilityXp;
    }

    public void setHerbloreXp(int herbloreXp) {
        this.herbloreXp = herbloreXp;
    }

    public void setThievingXp(int thievingXp) {
        this.thievingXp = thievingXp;
    }

    public void setFletchingXp(int fletchingXp) {
        this.fletchingXp = fletchingXp;
    }

    public void setSlayerXp(int slayerXp) {
        this.slayerXp = slayerXp;
    }

    public void setFarmingXp(int farmingXp) {
        this.farmingXp = farmingXp;
    }

    public void setConstructionXp(int constructionXp) {
        this.constructionXp = constructionXp;
    }

    public void setHunterXp(int hunterXp) {
        this.hunterXp = hunterXp;
    }

}
