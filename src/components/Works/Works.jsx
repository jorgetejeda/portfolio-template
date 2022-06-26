import React from 'react';
import { motion } from 'framer-motion';

import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

import './Work.css';

const Works = () => {
  return (
    <div className='Works'>
      <div className='awesome'>
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          <br />
          Dolores corrupti quo temporibus unde quam? Nostrum atque amet
          obcaecati
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </span>
        <button className='button s-button'>Hire me</button>
        <div className='blur s-blur1' style={{ background: '#abf1ff94' }}></div>
      </div>

      <div className='w-right'>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className='w-mainCircle'
        >
          <div className='w-secCircle'>
            <img src={Upwork} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={Fiverr} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={Amazon} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={Shopify} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={Facebook} alt='' />
          </div>
          <div className='w-backCircle blueCircle'></div>
          <div className='w-backCircle yellowCircle'></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
