import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menu_icon from "../../assets/img/menu.png";
import logo from "../../assets/img/logo.png";
import search_icon from "../../assets/img/search.png";
import upload_icon from "../../assets/img/upload.png";
import more_icon from "../../assets/img/more.png";
import notification_icon from "../../assets/img/notification.png";
import profile_icon from "../../assets/img/jack.png";

export const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div ">
      <div className="nav-left flex=div">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <img
          className="memu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Buscar" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <button class="material-symbols-outlined">dark_mode</button>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
