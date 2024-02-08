import React from "react";
import style from "../Header.module.css";
import Logo from "../../../assets/Img/CleaningXlogo.png";

const Navbar = () => {
  return (
    <div className={`${style.container} ${style.NavbarHeader}`}>
      <div className={style.NavbarItem}>
        <ul>
          <li>
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={style.StartedNavbar}>
        <span>Cart (0)</span>
        <a href="#"> Get a free quote</a>
      </div>
    </div>
  );
};

export default Navbar;
