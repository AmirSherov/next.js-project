import React from 'react';
import './style.scss';

const Footer = () => {
  return (
<footer className="footer">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
</link>
    <div className="footer-container">
        <div className="footer-logo">
        
            <img width={140} height={140} src="logopy.png" alt="Logo" className="logo-img" />
            <h1>Pyhton restaurant</h1>
        </div>
        <div className="footer-links">
            <ul>
                <li><a href="About">О нас</a></li>
                <li><a href="Serveices">Услуги</a></li>
                <li><a href="Policy">Политика конфиденциальности</a></li>
            </ul>
        </div>
        <div className="footer-socials">
            
            <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/AmirSherov" className="social-icon">
                <i className="fab fa-github"></i> 
            </a>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Sherov Studio. Все права защищены.</p>
    </div>
</footer>


  );
};

export default Footer;