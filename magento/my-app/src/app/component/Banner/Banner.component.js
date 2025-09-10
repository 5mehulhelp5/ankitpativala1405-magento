import React from 'react';

const Banner = () => {
    return (
        <div style={{
            backgroundColor: '#6200ea',
            color: '#fff',
            textAlign: 'center',
            padding: '40px',
            borderRadius: '10px',
            margin: '20px auto',
            maxWidth: '800px'
        }}>
            <h1>Welcome to My ScandiPWA Store!</h1>
            <p>Fast, modern, and fully React-powered Magento frontend.</p>
        </div>
    );
};

export default Banner;
