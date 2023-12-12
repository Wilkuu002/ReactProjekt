
import React from "react";
import "../css/Kontakt.css";

const Kontakt = () => {
    return (
        <div className="form">
            <h1 className="Naglowki">Kontakt</h1>
            <div className="ButtonSend">
                <div className="Wiadomosc">
                    <div>Wiadomość</div>
                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" rows="4" cols="50"></textarea>
                </div>
                <h3 className="SendButton">Wyślij</h3>
            </div>
            <div>
                <h1 className="Naglowki">Faq</h1>
                <ul className="FAQlist">
                    <li className="FAQ"> asdsdghsdfgh</li>
                    <li className="FAQ">dgjfgjkghjk</li>
                </ul>
            </div>
        </div>
    );
};

export default Kontakt;
