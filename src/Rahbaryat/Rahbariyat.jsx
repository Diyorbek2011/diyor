import React from "react";
import "./rahbariyat.css";
import qobil from "../imglar/qobl.jpeg";
import ikkkinchi from "../imglar/2022-12-30-07-02-48_1dbb5a60cd112f61d8e53b540e932f89.jpeg";
import ikkkinchii from "../imglar/2rasm.jpeg";
import turt from "../imglar/4rasm.png";
import { NavLink } from "react-router-dom";
export default function Rahbariyat() {
  return (
    <div className="rahbar_div">
      <h1 className="rahbariyat_h1">Rahbariyat</h1>
      <section className="qobil">
        <img className="rahbariyat_img" src={qobil} alt="" />
        <h1 style={{ fontSize: 24 }}>Zohidov Qobiljon Toirjonovich - Rektor</h1>
        <NavLink to="/Batafsil1">
          <button className="rahbar">Batafsil</button>
        </NavLink>
      </section>
      <div>
        <h1 className="rahbariyat_h1">Prorektorlar</h1>
      <div className="grid">
        <div className="prorektorlar">
          <section className="prorektor_1">
            <div className="boorderImg">
              <img className="rasm3" src={ikkkinchi} alt="" />
            </div>
            <h2>
              Ishandjanov Baxtiyor <br /> Ilhomovich
            </h2>
            <p>Prorektor</p>
            <NavLink to="/Batafsil2">
              <button className="rahbar">Batafsil</button>
            </NavLink>
          </section>
        </div>
        <div className="prorektorlar">
          <section className="prorektor_1">
            <div className="boorderImg">
              <img className="rasm3" src={ikkkinchii} alt="" />
            </div>
            <h2>
              Mamatov Dilmurad <br /> Nurmuratovich
            </h2>
            <p>Prorektor</p>
            <NavLink to="/Batafsil3">
              <button className="rahbar">Batafsil</button>
            </NavLink>
          </section>
        </div>
        <div className="prorektorlar">
          <section className="prorektor_1">
            <div className="boorderImg">
              <img className="rasm3" src={turt} alt="" />
            </div>
            <h2>
              Azimbayev Jamalxon <br /> Kamildjanovich
            </h2>
            <p>Prorektor</p>
            <NavLink to="/Batafsil4">
              <button className="rahbar">Batafsil</button>
            </NavLink>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
}
