import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';

import 'swiper/css';
import './Portfolio.css';

const Portfolio = () => {
  const imgSlider = [Sidebar, Ecommerce, HOC, MusicApp];

  return (
    <div className='Portfolio' id='Portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor
        className='Portfolio-slider'
      >
        {imgSlider.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
