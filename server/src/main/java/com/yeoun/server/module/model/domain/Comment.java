package com.yeoun.server.module.model.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    private String content;
    private int likeCount;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "parent_id")
    private Comment parent;

    @OneToMany(mappedBy = "parent")
    private List<Comment> child = new ArrayList<>();

    @ManyToOne(fetch = LAZY)
    private Post post;

    public void addChildComment(Comment child) {
        this.child.add(child);
        child.setParent(this);
    }

    public void setPost(Post post) {
        this.post = post;
        post.getComments().add(this);
    }
}
