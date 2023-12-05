// MenuButtons.jsx

import React from "react";
import {Link} from "react-router-dom";
import "../css/Guziki.css"

function Guziki() {
    return (
        <div className="Menu">
            <Link to="/" className="button ">Strona Główna</Link>
            <Link to="/obrazy" className="button ">Obrazy</Link>
            <Link to="/dodaj-obraz" className="button ">Dodaj obraz</Link>
            <Link to="/Kontakt" className="button ">Kontakt</Link>
        </div>
    );
}


export default Guziki;
