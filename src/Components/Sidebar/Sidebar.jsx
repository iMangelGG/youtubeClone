import React from "react";
import "./Sidebar.css";

import home from "../../assets/img/home.png";
import game_icon from "../../assets/img/game_icon.png";
import automobiles from "../../assets/img/automobiles.png";
import sports from "../../assets/img/sports.png";
import entertainment from "../../assets/img/entertainment.png";
import tech from "../../assets/img/tech.png";
import music from "../../assets/img/music.png";
import blogs from "../../assets/img/blogs.png";
import news from "../../assets/img/news.png";
import jack from "../../assets/img/jack.png";
import simon from "../../assets/img/simon.png";
import tom from "../../assets/img/tom.png";
import megan from "../../assets/img/megan.png";
import cameron from "../../assets/img/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcult-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Inicio</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" />
          <p>VideoJuegos</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" />
          <p>Deportes</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" />
          <p>Entretenimiento</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <p>Tecnologia</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <p>Musica</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" />
          <p>Noticias</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Suscripciones</h3>
        <div className="side-link">
          <img src={jack} alt="" /> <p>Rubiuh</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" /> <p>TheGref</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" /> <p>JordiWild</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" /> <p>JordiNP</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" /> <p>Mangel</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
