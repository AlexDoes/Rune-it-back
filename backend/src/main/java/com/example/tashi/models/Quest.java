package com.example.tashi.models;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators.In;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.HashMap;
import java.util.Map;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "quests")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Quest {
    @Id
    // private UUID id = UUID.randomUUID();
    private String id;
    private String name;
    private String description;
    private String reward;
    private Map<String, Integer> questFields = new HashMap<>();
}
