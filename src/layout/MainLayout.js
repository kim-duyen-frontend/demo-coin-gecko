import React from 'react';
import Footer from '../components/footer';

const MainLayout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;