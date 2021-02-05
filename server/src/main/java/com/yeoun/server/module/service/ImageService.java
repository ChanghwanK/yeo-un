package com.yeoun.server.module.service;

import com.yeoun.server.module.model.domain.Image;
import com.yeoun.server.module.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ImageService {

    private final ImageRepository imageRepository;

    public void save(Image image) {
        Image img = new Image();
        img.setFileName(image.getFileName());
        img.setFileOriginalName(image.getFileOriginalName());
        img.setFileUrl(image.getFileUrl());

        imageRepository.save(img);
    }
}
