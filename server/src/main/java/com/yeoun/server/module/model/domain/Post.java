package com.yeoun.server.module.model.domain;

import com.yeoun.server.module.model.dto.post.PostUpdateDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.ToString;
import lombok.ToString.Exclude;

/**
 * 1. setComment 함수로 댓글 연관관계 추가
 * 2. LocalDate 타입 필드 제거 (BaseEntity 로 대체 됨)
 * 3. 연관관계 편의 메소드가 삭제되고 setComment 등으로 대체 되었습니다.
 */
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String author;
    private String title;
    private String content;

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
                String author,
                String content,
                Member member,
                Category category,
                Image... images) {
        this.title = title;
        this.content = content;
        this.likeCount = 0;
        this.viewCount = 0;
        this.member = member;
        this.category = category;
        for (Image image : images) {
            this.addImage(image);
        }
    }


    /**
     * 내용 변경을 위한 메서드
     * @param updateDto
     */
    public void toUpdate(PostUpdateDto updateDto) {
        if (updateDto.getCategoryId() != null) {
            this.content = updateDto.getContent();
        }
    }

    public void addImage(Image image) {
        images.add(image);
        image.setPost(this);
    }

    public void setComments(List<Comment> comments) {
        this.comments = new ArrayList<>(comments);
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setMember(Member member) {
        this.member = member;
    }
}
