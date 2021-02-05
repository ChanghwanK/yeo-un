import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SubHeaderItem from 'components/sub-header/SubHeaderItem';

import SubHeader1 from 'images/subHeader1.png';
import SubHeader2 from 'images/subHeader2.png';
import SubHeader3 from 'images/subHeader3.png';

const SubHeader = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <SubHeaderItem color="white">
          <img src={SubHeader1} alt="이미지" />
        </SubHeaderItem>
        <SubHeaderItem color="white">
          <img src={SubHeader2} alt="이미지" />
        </SubHeaderItem>
        <SubHeaderItem color="white">
          <img src={SubHeader3} alt="이미지" />
        </SubHeaderItem>
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
