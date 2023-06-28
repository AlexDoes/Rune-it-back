package com.example.tashi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.tashi.models.Quest;

@Repository
public interface QuestRepository extends MongoRepository<Quest, String> {
    // additional custom methods can be declared here
}