import React from 'react'
import './Banner.css';
import sglogo from './sglogo.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Banner() {
  return (
    <div className='liste'>
        <img className='sglogo' src={sglogo}  alt="logo" />
        
        <div className='banner'>
            <div className='bannerp'>
                <p >ADJASS</p>
                <p className='usersInfo'>Fida AISSA sign Out </p> 
                <AccountCircleIcon className='userIcons' />
            </div>
            
        </div>

    </div>
  )
}

export default Banner