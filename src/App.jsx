
import './App.css';
import Galeria from "./Komponenty/jsx/galeria";
import StronaGlowna from "./Komponenty/jsx/StronaGlowna.jsx";
import Guziki from "./Komponenty/jsx/Guziki";

function App() {
    return (
        <div className="App">
            <Guziki/>
            <StronaGlowna/>
            <Galeria/>
        </div>
    );
}
export default App;
