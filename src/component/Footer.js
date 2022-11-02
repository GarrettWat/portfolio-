import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"
import { Link } from '@material-ui/core';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <a href='https://www.facebook.com/profile.php?id=100043461401349' target="_blank"><FacebookIcon/></a>
            <a href='https://twitter.com/WateGarrett' target="_blank"><TwitterIcon/></a>
            <a href='https://www.linkedin.com/in/garrett-waters-7953a2220/' target="_blank"><LinkedInIcon/></a>
        </div>
        <p> &copy; 2022 Garrett Waters</p>
    </div>
  )
}

export default Footer