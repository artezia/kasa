import React from "react"; 
import '../styles/error.css';
import {Link} from 'react-router-dom';

function Error() {
    return (<div>
        <h1 className="error404">404</h1>
        <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
        <p className="errorMessageLink"><Link to={`../pages/Home`} className="errorHome">Retourner sur la page d'accueil</Link></p>
    </div>)
}

export default Error;