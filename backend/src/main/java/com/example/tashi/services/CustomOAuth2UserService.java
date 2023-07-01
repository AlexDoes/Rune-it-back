package com.example.tashi.services;

import com.example.tashi.models.User;
import com.example.tashi.models.Quest;
import com.example.tashi.repository.UserRepository;

import jakarta.annotation.PostConstruct;
import lombok.extern.java.Log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
 

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void postConstruct() {
        System.out.println("CustomOAuth2UserService is initialized");
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String providerId = oAuth2User.getName();
        String email = oAuth2User.getAttribute("email");
        String name = oAuth2User.getAttribute("name");
        User user = userRepository.findByEmail(email);
        if (user == null) {
            user = new User();
            user.setId(providerId);
            user.setUsername(name);
            user.setEmail(email);
            userRepository.save(user);
        }

        return oAuth2User;
    }













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