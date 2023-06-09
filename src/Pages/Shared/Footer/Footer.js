import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo1.png";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content rounded-lg">
            <div>
                <img src={logo} alt="alt" />
                <p className='font-teko text-xl tracking-wider'><span className='tracking-widest'>NR International.</span><br />Providing reliable tech since 2018</p>
            </div>
            <div className='font-barlow'>
                <span className="footer-title">Company</span>
                <Link to="/about-us" className="link link-hover">About us</Link>
                <Link to="/contact-us" className="link link-hover">Contact us</Link>
            </div>
            <div className='font-barlow'>
                <span className="footer-title">Legal</span>
                <Link to="/terms&conditions" className="link link-hover">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
                <Link to="/cookie-policy" className="link link-hover">Cookie policy</Link>
                <Link to="/licensing" className="link link-hover">Licensing</Link>
            </div>
        </footer>
    );
};

export default Footer;