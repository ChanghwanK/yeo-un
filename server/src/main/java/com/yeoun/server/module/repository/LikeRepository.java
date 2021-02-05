package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Liked;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * description:
 *
 * @author changhwan kim
 * @since 2021/02/05
 */
public interface LikeRepository extends JpaRepository<Liked, Long> {

  //@Query(value = "select like from Liked like where like.member.id =: memberId")
  List<Liked> findLikedByMemberId(@Param("memberId") Long memberId);
}
