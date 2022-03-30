import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <InstagramIcon/>
    <FacebookIcon/>
    <TwitterIcon/>
    <LinkedInIcon/>
    </div>
    <div className='icon'>
    <p><CopyrightIcon/></p>
    <p>2022 bhavsarfoods.com</p>
    </div>
    </div>
  )
}

export default Footer
