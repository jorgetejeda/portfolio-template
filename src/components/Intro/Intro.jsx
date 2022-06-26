import React from 'react';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import { motion } from 'framer-motion';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import GlassEmoji from '../../img/glassesimoji.png';

import './Intro.css';

const Intro = () => {
  const transition = {
    duration: 2,
    type: 'spring',
  };

  return (
    <div className='Intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span>Hi!, I Am</span>
          <span>Jorge Tejeda</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className='i-icons'>
          <img src={Github} alt='Github' />
          <img src={LinkedIn} alt='LinkedIn' />
          <img src={Instagram} alt='Instragram' />
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={Boy} alt='' />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={GlassEmoji}
          alt=''
        />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '56%' }}
          className='floating-div'
        >
          <FloatingDiv image={Crown} text={['Web', 'Developer']} />
        </motion.div>
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18.6rem', left: '1rem' }}
          className='floating-div'

        >
          <FloatingDiv image={Thumbup} text={['Best Design', 'Award']} />
        </motion.div>
        <div className='blur' style={{ background: 'rgb(238, 210 255)' }}></div>
        <div
          className='blur'
          style={{
            background: '#c1f5ff',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
