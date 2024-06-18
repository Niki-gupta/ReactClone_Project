import React from 'react';
import './style.css';
import instagramLogo from '../assets/instagram logo..png'
import LinkdIn from '../assets/linkedin.png';
import telegramLogo from '../assets/telegram.png';

const Footr = () => {
  return (
    <footer className="footer">
      <h2 className="footer-heading">Vast community of students</h2>
      <div className="footer-icons">
        <div className="footer-icon">
          <span>2.5 k+</span>
          <img src={instagramLogo} alt="Instagram" className="social-icon" />
        </div>
        <div className="footer-icon">
          <span>50 k+</span>
          <img src={telegramLogo} alt="telegram" className="social-icon" />
        </div>
        <div className="footer-icon">
          <span>29 k+</span>
          <img src={LinkdIn} alt="LinkdIn" className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footr;
