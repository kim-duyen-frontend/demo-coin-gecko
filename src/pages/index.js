import React from 'react';
import Banner from '../features/banner';
import EarnPassive from '../features/earn-passive';
import ExploreCrypto from '../features/explore-crypto';

const HomePage = () => {
    return (
        <>
            <Banner />
            <EarnPassive />
            <ExploreCrypto />
        </>
    );
};

export default HomePage;