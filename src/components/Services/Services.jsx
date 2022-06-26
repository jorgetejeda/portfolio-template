import React from 'react';
import HeartEmoji from '../../img/heartemoji.png';
import Card from '../Card/Card';

import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

import Resume from './Resume.pdf';

import './Services.css';

const Services = () => {
  return (
    <div className='Services' id='Services'>
      <div className='awesome'>
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Dolores corrupti quo temporibus unde quam? Nostrum atque amet
          obcaecati.
        </span>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{ background: '#abf1ff94' }}></div>
      </div>
      <div className='cards'>
        <div style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading='Design'
            detail='Figma, Sketch, Photoshop, Adobe Xd, Adobe'
          />
        </div>
        <div style={{ left: '-4rem', top: '12rem' }}>
          <Card
            emoji={Glasses}
            heading='Developer'
            detail='Html, Css, Javascript, React, Angular, Node'
          />
        </div>
        <div style={{ left: '12rem', top: '19rem' }}>
          <Card
            emoji={Humble}
            heading='UI/UX'
            detail='Dolores corrupti quo temporibus unde quam? Nostrum atque.'
          />
        </div>
        <div
          className='blur s-blur2'
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
