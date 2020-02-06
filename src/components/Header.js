import React from "react";
import Logo from "../assets/logo.png";
function Header() {
  return (
    <header>
      <nav>
        <img className="header-logo" src={Logo} />
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
