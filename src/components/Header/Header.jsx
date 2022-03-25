import "./Header.css";
import novaScotia from "../../images/nova-scotia.png";

function Header() {
  return (
    <div className="header">
      <img src={novaScotia} alt="Background" className="background-image" />
      <div className="title">
        <h1>Sam Silver</h1>
        <h2>Maritimer, Born N' Raised</h2>
      </div>
    </div>
  );
}

export default Header;
