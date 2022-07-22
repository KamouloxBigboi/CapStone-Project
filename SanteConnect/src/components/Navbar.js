import React from "react";
import "./Navbar.css";
import Logo from "./images/logo.png"

const Navbar = ({ sticky }) => {
return (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <img src={Logo} alt="Logo Santé Connect" />
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item"> Page d'accueil </li>
      <li className="navbar--link-item"> Forum </li>
      <li className="navbar--link-item"> Mon Compte   </li>
      <li className="navbar--link-item"> Déconnexion </li>
    </ul>
  </nav>
)};
export default Navbar;