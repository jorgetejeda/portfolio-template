import React from 'react';
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
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
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
        <div>
          <FloatingDiv image={Crown} text={['Web', 'Developer']}/>
        </div>
      </div>
    </div>
  );
};

export default Intro;
