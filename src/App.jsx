import "./App.css";
import Navigation from "./components/Nav/Navigation";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="page">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
