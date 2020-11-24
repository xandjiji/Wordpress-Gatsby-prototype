import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MasterLayout = ({ children }) => {
    return (
        <>
            <main>
                <Header />
                {children}
            </main>

            <Footer />
        </>
    );
}

export default MasterLayout