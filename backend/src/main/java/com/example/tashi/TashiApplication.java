package com.example.tashi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tashi.seeders.DBSeeder;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class TashiApplication {
    private final DBSeeder dbSeeder;

    public TashiApplication(DBSeeder dbSeeder) {
        this.dbSeeder = dbSeeder;
    }

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

    // @Bean
    // public CommandLineRunner run() {
    //     return args -> {
    //         dbSeeder.run();
    //     };
    // }
}