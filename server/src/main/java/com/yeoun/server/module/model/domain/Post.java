package com.yeoun.server.module.model.domain;

import com.yeoun.server.module.dto.PostUpdateDto;
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
public class Post extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
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

    @OneToMany(mappedBy = "post")
    private List<Image> images = new ArrayList<>();

    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public Post(String title,
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

//  수정 요청을 받는 메서드
    public void update(PostUpdateDto updateDto) {
        if (updateDto.getContent() != null) {
            content = updateDto.getContent();
        }

        /** todo
         *  - 카테고리 변경 어떻게 할까 ? 고민
         *  - 매개 값으로 받으면 될까??
         */
//        if (updateDto.getCategoryId() != null) {
//            category.getId() = updateDto.getCateogoryId();
//        }
    }


    //==연관관계 편의 메서드==//
    public void setMember(Member member) {
        this.member = member;
        member.getPostList().add(this);
    }

    public void addImage(Image image) {
        images.add(image);
        image.setPost(this);
    }

    public void addComment(Comment comment) {
        comments.add(comment);
        comment.setPost(this);
    }
}
