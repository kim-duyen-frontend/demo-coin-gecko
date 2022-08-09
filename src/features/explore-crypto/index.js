import React from 'react';
import useFetchData from '../../custom-hooks';
import "./style.scss";

const ExploreCrypto = () => {
    const { listData } = useFetchData();
    return (
        <div className="explorecrypto">
            <div className="container">
                <div className="left">
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p className="description">See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
                <div className="right">
                    <div className="wrap">
                        {listData.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>${item.current_price.toLocaleString()}</p>
                                {item.price_change_percentage_24h < 0 ? (
                                    <p>
                                        <i className="fa-solid fa-arrow-trend-down"></i>
                                        <span>{item.price_change_percentage_24h.toFixed(2)}%</span>
                                    </p>
                                ) : (
                                        <p>
                                            <i className="fa-solid fa-arrow-trend-up"></i>
                                            <span>{item.price_change_percentage_24h.toFixed(2)}%</span>
                                        </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCrypto;