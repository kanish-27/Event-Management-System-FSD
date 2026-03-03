import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content flex justify-between items-center">
                    <div className="footer-brand">
                        <h3 className="text-gradient">NextEvent</h3>
                        <p>© 2024 All rights reserved.</p>
                    </div>

                    <div className="footer-social flex gap-2">
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                        <a href="#" className="social-link"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
