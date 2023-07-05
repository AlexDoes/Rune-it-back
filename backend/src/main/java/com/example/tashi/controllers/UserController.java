package com.example.tashi.controllers;
import com.example.tashi.classes.UserNotFoundException;
import com.example.tashi.models.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tashi.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.tashi.services.UserService;
import org.springframework.http.HttpStatus;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

//     @PutMapping("/updateuserinfo")
//     public ResponseEntity<User> updateUserInfo(@RequestBody User updatedUserInfo, OAuth2AuthenticationToken auth) {
//         Map<String, Object> attributes = auth.getPrincipal().getAttributes();
//         String userEmail = (String) attributes.get("email");
//         try {
//             User user = userService.updateUser(updatedUserInfo, userEmail);
//             return ResponseEntity.ok(user);
//         } catch (UserNotFoundException e) {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @RequestMapping("/userinfo")
//     public User userinfo(OAuth2AuthenticationToken auth) {
//             Map<String, Object> attributes = auth.getPrincipal().getAttributes();
//             String userEmail = (String) attributes.get("email");
//             return userRepository.findByEmail(userEmail);
//     }
// }


@PutMapping("/updateuserinfo")
public ResponseEntity<User> updateUserInfo(@RequestBody User updatedUserInfo, OAuth2AuthenticationToken auth) {
    if (auth == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
    Map<String, Object> attributes = auth.getPrincipal().getAttributes();
    String userEmail = (String) attributes.get("email");
    try {
        User user = userService.updateUser(updatedUserInfo, userEmail);
        return ResponseEntity.ok(user);
    } catch (UserNotFoundException e) {
        return ResponseEntity.notFound().build();
    }
}

@RequestMapping("/userinfo")
public ResponseEntity<User> userinfo(OAuth2AuthenticationToken auth) {
    if (auth == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
    Map<String, Object> attributes = auth.getPrincipal().getAttributes();
    String userEmail = (String) attributes.get("email");
    User user = userRepository.findByEmail(userEmail);
    if (user == null) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user);
}
}