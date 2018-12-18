import React from 'react';
import './style.css';

const Header = props => (
    <header className='header container-fluid'>
        <img className="logo" src="assets/images/logo.ico" alt='barcelona logo'/>
        <img className="logo2" src="assets/images/logo.ico" alt='barcelona logo'/>
        <h1>FC Barcelona Click Game</h1>
        <h2>Click on an image to earn points, but don't click on any of them more than once!</h2>
    </header>
);

export default Header;