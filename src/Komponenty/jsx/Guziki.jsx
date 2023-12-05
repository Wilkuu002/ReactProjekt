

import React from "react";
import { Link } from "react-router-dom";
import "../css/Guziki.css"
function Guziki({ onComponentChange }) {
    const handleClick = (componentName) => {
        onComponentChange(componentName);
    };

    return (
        <div className="Menu">
            <Link to="/" onClick={() => handleClick("StronaGlowna")} className="button">Strona Główna</Link>
            <Link to="/obrazy" onClick={() => handleClick("Galeria")}  className="button">Obrazy</Link>
            <Link to="/dodaj-obraz" onClick={() => handleClick("DodajObraz")} className="button">dodaj obraz</Link>
            <Link to="/Kontakt" onClick={() => handleClick("Kontakt")}  className="button">Kontakt</Link>
        </div>
    );
}

export default Guziki;
