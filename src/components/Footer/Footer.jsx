import React from 'react'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <img src={Wave} alt='' style={{width: '100%'}} />
      <div className="f-content">
        <span>Jorgetejeda@gmail.com</span>
        <div className="f-icons">
          <Insta color='white' size='3rem' />
          <Facebook color='white' size='3rem' />
          <Github color='white' size='3rem' />
        </div>
      </div>
    </div>
  )
}

export default Footer