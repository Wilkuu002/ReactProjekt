

import React, { useState, useEffect } from 'react';
import './stronaGlowna.css';

const StronaGlowna = () => {
    const [tekstZPliku, setTekstZPliku] = useState('');

    useEffect(() => {
        // Funkcja do pobierania zawartości pliku tekstowego
        const pobierzZawartoscPliku = async () => {
            try {
                const odpowiedz = await fetch('/teksty/tekxtMenu.txt');
                const tekst = await odpowiedz.text();
                setTekstZPliku(tekst);
            } catch (error) {
                console.error('Błąd podczas pobierania pliku:', error);
            }
        };

        // Wywołaj funkcję pobierającą plik po zamontowaniu komponentu
        pobierzZawartoscPliku();
    }, []); // Pusta tablica zależności sprawia, że useEffect zadziała tylko raz po zamontowaniu komponentu

    return (
        <div className="StronaGlowna">
            <div className="TekstContainer">
                <div className="Tekst">{tekstZPliku}</div>
            </div>
        </div>
    );
};

export default StronaGlowna;
