import "./App.css";
import novaScotia from "./images/nova-scotia.png";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <img src={novaScotia} alt="Background" className="background-image" />
      <Header />
    </div>
  );
}

export default App;
