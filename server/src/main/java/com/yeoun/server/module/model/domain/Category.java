package com.yeoun.server.module.model.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_name")
    private Long id;

    private String name;
    private String description;

    @OneToMany(mappedBy = "category")
    private List<Yeoun> yeoun = new ArrayList<>();
}
