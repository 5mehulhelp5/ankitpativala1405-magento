import React from 'react';
import Banner from '../../component/Banner/Banner.component';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h2>Our Latest Products</h2>
                <p>Products will be listed here soon...</p>
            </div>
        </div>
    );
};

export default HomePage;
