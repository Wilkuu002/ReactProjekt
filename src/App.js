
import './App.css';
import Galeria from "./galeria";
import StronaGlowna from "./StronaGlowna";

function App() {
  return (
    <div className="App">
        <div className="Menu">
        <button>Strona Główna</button>
        <button>Obrazy</button>
        <button>Dodaj obraz</button>
        <button>Kontakt</button>
        </div>
        <h1>Witamy w Galerii</h1>
        <StronaGlowna/>
        <Galeria/>
    </div>
  );
}

export default App;
