package com.example.tashi.services;

import com.example.tashi.models.User;
import com.example.tashi.models.Quest;
import com.example.tashi.repository.UserRepository;

import jakarta.annotation.PostConstruct;
import lombok.extern.java.Log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Cos;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import com.example.tashi.classes.CustomOAuth2User;
import com.example.tashi.repository.UserRepository;    
 

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        CustomOAuth2User user = new CustomOAuth2User(oAuth2User);
        String email = (String) oAuth2User.getAttributes().get("email");
        String name = (String) oAuth2User.getAttributes().get("name");

        System.out.println("email: " + email);
        System.out.println("name: " + name);

        User possibleUser = userRepository.findByEmail(email);
        System.out.println("possibleUser: " + possibleUser);
        if (possibleUser == null) {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setUsername(name);
            userRepository.save(newUser);
        }
        return new CustomOAuth2User(oAuth2User);       
    }


    // @Autowired
    // private UserRepository userRepository;

    // @PostConstruct
    // public void postConstruct() {
    //     System.out.println("CustomOAuth2UserService is initialized");
    // }

    // @Override
    // public OAuth2User loadUser(OAuth2UserRequest userRequest) {
    //     OAuth2User oAuth2User = super.loadUser(userRequest);

    //     String providerId = oAuth2User.getName();
    //     String email = oAuth2User.getAttribute("email");
    //     String name = oAuth2User.getAttribute("name");
    //     User user = userRepository.findByEmail(email);
    //     if (user == null) {
    //         user = new User();
    //         user.setId(providerId);
    //         user.setUsername(name);
    //         user.setEmail(email);
    //         userRepository.save(user);
    //     }

    //     return oAuth2User;
    // }


    // public OAuth2User loadUser(OAuth2UserRequest userRequest) {
    //     OAuth2User oAuth2User = super.loadUser(userRequest);

    //     String providerId = oAuth2User.getName();
    //     String email = oAuth2User.getAttribute("email");
    //     String name = oAuth2User.getAttribute("name");

    //     User user = userRepository.findById(providerId).orElse(null);
    //     if (user == null) {
    //         user = new User();
    //         user.setId(providerId);
    //         user.setUsername(name);
    //         user.setEmail(email);
    //         // You might not have password as Google login does not provide password
    //         // So make sure to handle it properly considering your application's requirement
    //         userRepository.save(user);
    //     }

    //     return oAuth2User;
    // }
}