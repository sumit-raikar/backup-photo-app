import React from 'react';
import { ReactComponent as ReactLogo } from '../static-resources/applogo.svg';
import './header.scss';

function Header() {
    return (
        <header className="app-header-main">
            <ReactLogo className="app-logo" />
            <div className="app-name">Sumeeth G Raikar</div>
            <nav className="app-logo nav-container">
                <a href="#">Home<span /></a>
                <a href="#">Home<span /></a>
                <a href="#">Home<span /></a>
                <a href="#">Home<span /></a>
                <a href="#">Home<span /></a>
                <a href="#">Home<span /></a>
            </nav>
        </header>
    );
}

export default Header;