// MenuButtons.jsx

import React from "react";
import {Link, Route, Router, Routes} from "react-router-dom";
import "../css/Guziki.css"

function MenuButtons() {
    return (
        <div className="Menu">
            <Link to="/" className="Menu button ">Strona Główna</Link>
            <Link to="/obrazy" className="Menu button ">Obrazy</Link>
            <Link to="/dodaj-obraz" className="Menu button ">Dodaj obraz</Link>
            <Link to="/Kontakt" className="Menu button ">Kontakt</Link>
        </div>
    );
}


export default MenuButtons;
