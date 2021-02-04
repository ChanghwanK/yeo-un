package com.yeoun.server.module.model.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Yeoun {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "yeoun_id")
    private Long id;

    private String title;
    private String content;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "modified_at")
    private LocalDateTime modifiedAt;

    @Column(name = "like_count")
    private int likeCount;

    @Column(name = "view_count")
    private int viewCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "yeoun")
    private List<Image> images = new ArrayList<>();

    @OneToMany(mappedBy = "yeoun")
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public Yeoun(String title,
                 String content,
                 Member member,
                 Category category,
                 Image... images) {
        this.title = title;
        this.content = content;
        this.createdAt = LocalDateTime.now();
        this.likeCount = 0;
        this.viewCount = 0;
        this.member = member;
        this.category = category;
        for (Image image : images) {
            this.addImage(image);
        }
    }

    //==연관관계 편의 메서드==//
    public void setMember(Member member) {
        this.member = member;
        member.getYeounList().add(this);
    }

    public void addImage(Image image) {
        images.add(image);
        image.setYeoun(this);
    }
}
