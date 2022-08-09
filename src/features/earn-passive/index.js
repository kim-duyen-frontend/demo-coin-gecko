import React, { useState } from 'react';
import picPhone from "../../assets/images/phone-trade.png";
import './style.scss';

const EarnPassive = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="earnpassive">
            <div className="container">
                <div className="left">
                    <img src={picPhone} alt="phone trade" />
                </div>
                <div className="right">
                    <h2 className="title">Earn passive income with crypto.</h2>
                    <p className="description">Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        <button className='btn' onClick={() => console.log(email)}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarnPassive;