package com.example.tashi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

}
