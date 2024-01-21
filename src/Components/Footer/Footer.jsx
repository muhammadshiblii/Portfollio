import React from 'react'
import './Footer.scss'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer_main'>
        <div className="foot_left">
            <h3>About</h3>
            <p>Highly motivated and determined MERN STACK developer with a passion for building high-quality web applications. Seeking
a challenging and dynamic work environment where to utilize skills and experience to build innovative web applications and
contribute to the growth and success of the company. Eager to learn and grow as a developer and make a meaningful impact</p>
        </div>
      {/* <div id="contact"> */}
      <div className="foot_right" id='contact'>
            <h3>Contact</h3>
            <p><FaPhone className='foot-icon' />+91 8086018403</p>
            <p><IoIosMail className='foot-icon-mail' />pmuhammadshibli@gmail.com</p>
            <p><FaLocationDot className='location-icon' />Perinthalmanna,Malappuaram,Kerala 679326</p>
            <div className="social-icons">
                {/* <a href="https://wa.me/9562890504"><SiWhatsapp className='socialIcons' /></a> */}
                {/* <a href="https://www.facebook.com/shamilbin.umer.5?mibextid=LQQJ4d"><RiFacebookFill className='socialIcons' /></a> */}
                <a href="https://www.instagram.com/shibil__ii?utm_source=qr&igsh=YmhobG55b2w1Z284"><FaInstagram className='socialIcons' /></a>
                <a href="https://www.linkedin.com/in/muhammad-shibili-08862b282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn className='socialIcons' /></a>
                <a href="https://github.com/muhammadshiblii"><FaGithub className='socialIcons' /></a>
            </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Footer
