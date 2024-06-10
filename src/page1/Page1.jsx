import { useState } from "react";
import React from "react";
import logo from "../imglar/iiiu_logo.webp";
import "./page1.css";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import "./App.css";
import logo_dark from "../imglar/dark-mode-6682.svg";
import sun from "../imglar/white-sun.png";
import Hamburger from "hamburger-react";
import Scrol from "@/ScrolTop/Scrol";
import burger from "./icons8-rain-cloud-96.png";
import 'animate.css';

export default function page1({ darkmode, handleDarkMode }) {
  function handleBurger() {
    const box1 = document.querySelector(".box");
    box101 = document.querySelector(".box10");
    box1.classList.toggle(".box10");
  }

  const [isOpen, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  function gadoy() {
    setMenu(true);
  }
  function close() {
    setMenu(false);
  }

  return (
    <div className="page1">
      <Scrol />
      <div className="box">
        <img className="img_logo" src={logo} alt="Hello" />
        <Link to="">
          <li className="li1">Bosh sahifa</li>
        </Link>
        <Link to="Fakeltultetlar">
          <li className="li1">Fakeltultetlar</li>
        </Link>
        <Link className="" to="Rahbariyat">
          <li className="li1">Rahbariyat</li>
        </Link>
        <Link to="Qabul">
          <li className="li1">Qabul</li>
        </Link>
        <Link to="Aloqa">
          <li className="li1">Aloqa</li>
        </Link>
        <img
          src={darkmode ? sun : logo_dark}
          alt=""
          className="aaas"
          onClick={handleDarkMode}
        />
        <div className="user">
          <UserButton />
        </div>
        <img
          className="burger_img"
          onClick={gadoy}
          src="https://img.icons8.com/ios-filled/50/menu--v1.png"
          alt=""
        />
      </div>
      {menu && (
        <>
          <div className="menu">
            <section>
              {" "}
              <h1 onClick={close}>X</h1>
            </section>
            <div className="menu1">
              <Link onClick={close} to="">
                <li className="li2">Bosh sahifa</li>
              </Link>
              <Link onClick={close} to="Fakeltultetlar">
                <li className="li2">Fakeltultetlar</li>
              </Link>
              <Link onClick={close} className="" to="Rahbariyat">
                <li className="li2">Rahbariyat</li>
              </Link>
              <Link onClick={close} to="Qabul">
                <li className="li2">Qabul</li>
              </Link>
              <Link onClick={close} to="Aloqa">
                <li className="li2">Aloqa</li>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
