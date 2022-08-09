import React from 'react';
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className='left'>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
                <div className='right'>
                    <div className='wrap'>
                        <div className='column'>
                            <h4>Support</h4>
                            <a href='#!'>Contact Us</a>
                            <a href='#!'>Chat</a>
                            <a href='#!'>Help Center</a>
                            <a href='#!'>FAQ</a>
                        </div>
                        <div className='column'>
                            <h4>Developers</h4>
                            <a href='#!'>Cloud</a>
                            <a href='#!'>Commerce</a>
                            <a href='#!'>Pro</a>
                            <a href='#!'>API</a>
                        </div>
                        <div className='column'>
                            <h4>Company</h4>
                            <a href='#!'>About</a>
                            <a href='#!'>Information</a>
                            <a href='#!'>Legal</a>
                            <a href='#!'>Privacy</a>
                        </div>
                        <div className='column'>
                            <h4>Social</h4>
                            <div className="social">
                                <a href='#!'>
                                    <i className="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href='#!'>
                                    <i className="fa-brands fa-square-twitter"></i>
                                </a>
                                <a href='#!'>
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href='#!'>
                                    <i className="fa-brands fa-square-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;