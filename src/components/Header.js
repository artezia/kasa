import React from "react"; 
import "./styles/header.css"
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav className="header">
            <div className="navbar-logo">
            <img src="../assets/logo.png" alt="logo" />
            </div>
            <Link to="../pages/">Accueil</Link>
            <Link to="../pages/About">A Propos</Link>
        </nav>
    )
}

export default Header