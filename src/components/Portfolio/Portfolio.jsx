import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor
        className='Portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
