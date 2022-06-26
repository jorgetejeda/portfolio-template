import React from 'react';
import Toggle from '../Toggle/Toggle';

import { Link as Scroll } from 'react-scroll';

import './Navbar.css';

const Navbar = () => {
  const navigation = ['Home', 'Services', 'Experiences', 'Portfolio'];
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Andrew</div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            {navigation.map((item) => (
              <Scroll key={item} spy={true} to={item} smooth={true}>
                <li>{item}</li>
              </Scroll>
            ))}
          </ul>
        </div>
        <Scroll spy={true} to='Contact' smooth={true}>
          <button className='button n-button'>Contact</button>
        </Scroll>
      </div>
    </div>
  );
};

export default Navbar;
