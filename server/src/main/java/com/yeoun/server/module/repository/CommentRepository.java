package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Comment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
  List<Comment> findByPostId(Long id);
}
