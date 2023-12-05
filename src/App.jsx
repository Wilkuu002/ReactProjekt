// App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galeria from "./Komponenty/jsx/galeria";
import StronaGlowna from "./Komponenty/jsx/StronaGlowna";
import Guziki from "./Komponenty/jsx/Guziki";
import Kontakt from "./Komponenty/jsx/Kontakt";

function App() {
    const [currentComponent, setCurrentComponent] = useState("StronaGlowna");

    const handleComponentChange = (componentName) => {
        setCurrentComponent(componentName);
    };

    return (
        <Router>
            <div className="App">
                <Guziki onComponentChange={handleComponentChange} />

                {currentComponent === "StronaGlowna" && <StronaGlowna />}
                {currentComponent === "Galeria" && <Galeria />}
                {currentComponent === "Kontakt" && <Kontakt />}
            </div>
        </Router>
    );
}

export default App;
