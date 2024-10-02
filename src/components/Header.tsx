// Header.tsx
import React from 'react';


const Header: React.FC = () => {
    return (
        <header className="header_wrap fixed-top dark_skin main_menu_uppercase main_menu_weight_600 transparent_header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="index.html">
                        <img className="logo_light" src="images/Zu7jStJ3Dhlb.png" alt="logo" />
                        <img className="logo_dark" src="images/KWrkedwv8kXW.png" alt="logo" />
                        <img className="logo_default" src="images/KWrkedwv8kXW.png" alt="logo" />
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="ion-android-menu"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li>
                        <a className="nav-link" href="/">Home</a>
                        </li>
            <li className="nav-item">
                <a className="nav-link" href="/signup">SignUp</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
