package com.yeoun.server.module.repository;

import com.yeoun.server.module.model.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image, Long> {

    Optional<Image> findById(Long id);

}
