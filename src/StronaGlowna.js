import React, { useState, useEffect } from 'react';
import './stronaGlowna.css';

const StronaGlowna = () => {
    const [tekstZPliku, setTekstZPliku] = useState('');

    useEffect(() => {
        // Funkcja do pobrania zawartości pliku tekstowego
        const pobierzZawartoscPliku = async () => {
            try {
                const odpowiedz = await fetch('/teksty/tekxtMenu.txt');
                const tekst = await odpowiedz.text();
                setTekstZPliku(tekst);
            } catch (error) {
                console.error('Błąd podczas pobierania pliku:', error);
            }
        };
        pobierzZawartoscPliku();
    }, []);

    return (
        <div className="Tekst">{tekstZPliku}</div>
    );
};

export default StronaGlowna;
