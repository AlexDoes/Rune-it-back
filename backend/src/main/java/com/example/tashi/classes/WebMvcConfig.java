package com.example.tashi.classes;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // registry.addMapping("/**")
        //         .allowedOrigins("http://localhost:5173","https://rune-it-back-l4p0.onrender.com")
        //         .allowedMethods("*")
        //         .allowCredentials(true);
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
                // .allowCredentials(true);
    }
}