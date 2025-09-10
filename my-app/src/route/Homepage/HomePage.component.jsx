import React, { Component } from 'react';

// Class name matches file name: HomePage.component.jsx → HomePageComponent
/** @namespace myApp/Route/Homepage/HomePage/Component */
export class HomePageComponent extends Component {
    render() {
        return (
            <div style={ { height: '100px', width: '100px' } }>
                <h1>Welcome to ScandiPWA!</h1>
                <p>This is my first custom page 🎉</p>
            </div>
        );
    }
}
export default HomePageComponent;
