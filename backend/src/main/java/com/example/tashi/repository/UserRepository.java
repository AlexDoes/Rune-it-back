package com.example.tashi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.tashi.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // additional custom methods can be declared here
    User findByEmail(String email); 

}