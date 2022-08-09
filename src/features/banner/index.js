import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Crypto from "../../assets/images/hero-img.png"
import "./style.scss";

const Banner = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="banner">
            <Navbar />
            <div className="container">
                <div className="left">
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurreny with Your IRA</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        <button className='btn' onClick={() => console.log(email)}>Learn More</button>
                    </div>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Crypto} alt='cryto' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;