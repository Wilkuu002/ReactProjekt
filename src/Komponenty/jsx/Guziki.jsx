// MenuButtons.jsx

import React from "react";
import {Link, Route, Router, Routes} from "react-router-dom";


function MenuButtons() {
    return (
        <div className="Menu">
            <Link to="/">Strona Główna</Link>
            <Link to="/obrazy">Obrazy</Link>
            <Link to="/dodaj-obraz">Dodaj obraz</Link>
            <Link to="/Kontakt">Kontakt</Link>
        </div>
    );
}

export default MenuButtons;
