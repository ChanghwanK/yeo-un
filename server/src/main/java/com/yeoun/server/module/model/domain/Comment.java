package com.yeoun.server.module.model.domain;

import com.yeoun.server.module.model.dto.comment.CommentUpdateRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter @Setter
public class Comment extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    private String content;
    private int likeCount;


    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;

    public void setPost(Post post) {
        this.post = post;
        post.getComments().add(this);
    }

    public void toUpdate(CommentUpdateRequest updateDto) {
        this.content = updateDto.getContent();
        this.likeCount = updateDto.getLikCount();
    }
}
