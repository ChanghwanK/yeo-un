package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

  Optional<Post> findById(Long yeounId);

  Page<Post> findAllByCategoryId(Long categoryId);
}
