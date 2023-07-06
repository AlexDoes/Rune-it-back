package com.example.tashi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@SpringBootApplication
@RestController
@RequestMapping("/api")
public class TashiApplication {
   

    public static void main(String[] args) {
        SpringApplication.run(TashiApplication.class, args);
        System.out.println("Hello World");
    }

    @GetMapping("/")
    public String homeRoute() {
        return "Hello World";
    }

    @GetMapping("/hello")
    public String apiRoute() {
        return "Hello World";
    }

    // @GetMapping("/user/{id}")
    // public String apiRoute2() {
    //     return "user id";
    // }

    // @Bean
    // public CommandLineRunner run() {
    //     return args -> {
    //         dbSeeder.run();
    //     };
    // }
}