// App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galeria from "./Komponenty/jsx/galeria";
import StronaGlowna from "./Komponenty/jsx/StronaGlowna";
import Guziki from "./Komponenty/jsx/Guziki";
import Kontakt from "./Komponenty/jsx/Kontakt";

function App() {
    return (
        <Router>
            <div className="App">
                <Guziki/>
                <StronaGlowna/>
                <Galeria/>
                <Routes >
                    <Route path="/" element={<StronaGlowna />} />
                    <Route path="/obrazy" element={<Galeria />} />
                    <Route path="/Kontakt" element={<Kontakt />} />

                </Routes>
            </div>
        </Router>
    );
}
export default App;
