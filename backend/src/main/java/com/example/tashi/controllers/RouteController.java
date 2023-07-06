package com.example.tashi.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouteController {
    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/";
    }
}