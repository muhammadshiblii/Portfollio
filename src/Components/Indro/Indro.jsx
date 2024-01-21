import React from 'react';
import { Link } from 'react-scroll';
import './Indro.scss';

const Indro = () => {
  return (
    <div>
      <section>
        <header className="container">
          <div className="page-header">
            <div className="logo">
              <a href="#">MUHAMMED SHIBLI</a>
            </div>
            <input type="checkbox" id="click" />

            <label htmlFor="click" className="mainicon">
              <div className="menu">
                <i className='bx bx-menu'></i>
              </div>
            </label>
            <ul>
              <li><Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="active" style={{ '--navAni': 1 }}>Home</Link></li>
              <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} style={{ '--navAni': 2 }}>About</Link></li>
              <li><Link to="skills" spy={true} smooth={true} offset={-70} duration={500} style={{ '--navAni': 3 }}>Skills</Link></li>
              <li><Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} style={{ '--navAni': 4 }}>Portfolio</Link></li>
              <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} style={{ '--navAni': 5 }}>Contact</Link></li>
            </ul>
            <label className="mode">
              <input type="checkbox" id="darkModeToggle" />
              <i className='bx bxs-moon'></i>
            </label>
          </div>
        </header>

        <div className="container" id="home">
          <div className="main">
            <div className="detail">
              <h3>Hi, I'm</h3>
              <h1><span style={{ color: '#52489C' }}>MUHAMMED </span> SHIBLI</h1>
              <p>I'm a professional Web Developer. Our main goal is to help and satisfy local and global clients with web development solutions.</p>
              <div className="social">
                <a href="https://www.linkedin.com/in/muhammad-shibili-08862b282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className='bx bxl-linkedin'></i></a>
                <a href="https://www.instagram.com/shibil__ii?utm_source=qr&igsh=YmhobG55b2w1Z284"><i className='bx bxl-instagram'></i></a>
                <a href="https://github.com/muhammadshiblii"><i className='bx bxl-github'></i></a>
                <a href="https://www.youtube.com/@Web_Devs__"><i className='bx bxl-youtube'></i></a>
              </div>
            </div>
            <div className="images">
              {/* Adjust the image source as needed */}
              <img src="/public/WhatsApp_Image_2024-01-21_at_12.50.57_PM-removebg-preview.png" alt="" className="img-w" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Indro;
