package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Category;
import com.yeoun.server.module.model.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

  List<Comment> findByPostId(Long id);

}
