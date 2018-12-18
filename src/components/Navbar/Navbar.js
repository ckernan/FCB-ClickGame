import React from 'react';
import './style.css';

const Navbar = props => (
    <nav className="navbar">
        <ul>
            <li className="brand"><a href="/"><img src="assets/images/logo.ico" width="30" height="30" alt="barcelona logo"/>Bar&ccedil;a Click Game</a></li>
            <li className="message">{props.message}</li>
            <li>Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Navbar;