
import React, {useState} from "react";
import "../css/Kontakt.css";

const Kontakt = () => {
    const [wiadomoscWyslana, setWiadomoscWyslana] = useState(false);
    const [wiadomosc, setWiadomosc] = useState("");

    const handleWyślij = () => {
        setWiadomoscWyslana(true);
        setWiadomosc("");
    };

    return (
        <div className="form">
            <h1 className="Naglowki">Kontakt</h1>
            <div className="ButtonSend">
                <div className="Wiadomosc">
                    {wiadomoscWyslana && <p>Wiadomość została wysłana!</p>}
                    <div>Wiadomość</div>
                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" rows="4" cols="50"
                     value={wiadomosc}
                    onChange={(e)=>setWiadomosc(e.target.value)}></textarea>
                </div>
                <button className="SendButton" onClick={handleWyślij}>
                    Wyślij
                </button>
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
