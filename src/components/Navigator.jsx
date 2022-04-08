import React from "react";
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { DiGithubBadge } from 'react-icons/di';

const Navigator = () => {

    return <nav className="navigator-page">
        <p>Front-end Developer</p>
        <ul className="nav-menu">
            <Link to="/"><li className="link">Início</li></Link>
            <Link to="/projects"><li className="link">Projetos</li></Link>
            <Link to="/contact"><li className="link">Contato</li></Link>
        </ul>
        <div className="icons">
            <a href="https://www.linkedin.com/in/pcwerneck/"><FaLinkedin /></a>
            <a href="mailto:p.cesarofc@gmail.com"><FiMail /></a>
            <a href="https://github.com/pcesarofc"><DiGithubBadge /></a>
        </div>
    </nav>
}

export default Navigator