package com.yeoun.server.module.model.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long id;

    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "yeoun_id")
    private Yeoun yeoun;

    public void setYeoun(Yeoun yeoun) {
        this.yeoun = yeoun;
        yeoun.getImages().add(this);
    }
}
