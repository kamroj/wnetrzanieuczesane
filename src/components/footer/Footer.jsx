import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item-container">
          <div className="footer-item-content">
            <div className="footer-item-content header">Media</div>
            <div className="footer-item-content content social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-item-container">
          <div className="footer-item-content">
            <div className="footer-item-content header">Ostatnie projekty</div>
            <div className="footer-item-content content">
              <ul>
                <li>Renowacja Pałacu Kultury</li>
                <li>Osiedle Zielone Wzgórze</li>
                <li>Centrum handlowe "Galeria Nowoczesna"</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-item-container">
          <div className="footer-item-content">
            <div className="footer-item-content header">Kontakt</div>
            <div className="footer-item-content content">
              <p>Tel: 880 171 161</p>
              <p>Email: kontakt@example.com</p>
              <p>Adres: ul. Kwiatowa 15, 00-001 Warszawa</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}