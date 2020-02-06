import React from "react";
import Logo from "../../assets/logo.png";
import "./style.css";

function Header() {
  return (
    <div className="header-container">
      <img src={Logo} />
      <a href="#">
        <h3>Meu perfil</h3>
      </a>
    </div>
  );
}

export default Header;
