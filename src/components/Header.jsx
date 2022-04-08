import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom'

const Header = () => <header className="header-page">
    <div className="logo-header">
        <Link to="/"><img src={Logo} alt="Logomarca" /></Link>
    </div>

</header>

export default Header