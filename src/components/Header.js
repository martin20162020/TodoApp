import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div >
        <GoogleAuth/>
        <div className="welcomePage WelcomePageContent">
            <h1 className="welcome">Welcome! Let's start creating your to do list today.</h1>
            <div>
            </div>
        </div>
    </div>
  );
};

export default Header;
