import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SubHeaderItem from 'components/sub-header/SubHeaderItem';

const SubHeader = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <SubHeaderItem color="#4a5158">현수의 여운</SubHeaderItem>
        <SubHeaderItem color="#9e9e9e">창환의 여운</SubHeaderItem>
        <SubHeaderItem color="#e691ff">건비의 여운</SubHeaderItem>
        <SubHeaderItem color="#ffd76d">정원의 여운</SubHeaderItem>
        <SubHeaderItem color="#ff9c57">유성의 여운</SubHeaderItem>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  .slick-initialized {
    overflow: hidden;
  }
`;

export default SubHeader;
