// Footer.js
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  
  return (
    <footer className='footer'>
      <hr />
      <div className='footer-container'>
        <div className='contact-address-container'>
          <div className='contact-section'>
            <h5>Contáctanos</h5>
            <a href='https://wa.me/573023453519' target='_blank'><FaWhatsapp className='whatsapp-icon' />  +57 3023453519</a>
            <a href="mailto:gcasadiegosr13@gmail.com"><FaEnvelope className='email-icon' /> gcasadiegosr13@gmail.com</a>
          </div>
          <div className='address-section'>
            <h5>Dirección: </h5>
            <p>Calle 8b #3n-22 Cúcuta-Norte de Santander</p>
            <p>Trigal del Norte</p>
          </div>
        </div>

        
      </div>
      <div className="social-section">
        
            <a href='https://www.facebook.com/' target="_blank" className="facebook-icon"><FaFacebookF /></a>
            <a href='https://www.instagram.com/' target="_blank" className="instagram-icon"><FaInstagram /></a>
            <a href='https://www.tiktok.com/es/' target="_blank" className="tiktok-icon"><FaTiktok /></a>
          </div>
        
      <hr />
    </footer>
  );
}
