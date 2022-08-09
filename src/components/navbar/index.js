import React, { useState } from 'react';
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="navbar">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <ul className="menu">
                    <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>Item 1</a>
                    </li>
                    <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>Item 2</a>
                    </li>
                    <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>Item 3</a>
                    </li>
                </ul>
                <div className="buttonConnect">Connect App</div>
                <div className="bars" onClick={() => setShow(!show)}>
                    {show ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}

                </div>
            </div>
            {
                show ? (
                    <div className="navMobi">
                        <ul className="menuMobi">
                            <li>
                                <a href="/#" onClick={(e) => e.preventDefault()}>Item 1</a>
                            </li>
                            <li>
                                <a href="/#" onClick={(e) => e.preventDefault()}>Item 2</a>
                            </li>
                            <li>
                                <a href="/#" onClick={(e) => e.preventDefault()}>Item 3</a>
                            </li>
                        </ul>
                        <div className="buttonConnectMobi">Connect App</div>
                    </div>
                ) : ""
            }
        </div>
    );
};

export default Navbar;