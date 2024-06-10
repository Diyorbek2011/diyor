import React from "react";
import "./footer.css";
import logo1 from "./icons8-facebook.svg";
import facebook from "./icons8-telegram.svg";
import instagram from "./icons8-instagram-50 (1).png";
import youtube from "./icons8-youtube-50.png";

export default function footer() {
  return (
    <footer>
      <section className="footer">
        <p className="footer_p">
          Innovatsion va Ijtimoiy-Iqtisodiyot Universiteti 2022. Barcha huquqlar
          himoyalangan
        </p>
       <div className="footer_div">
       <a href="https://t.me/iii_universiteti " target="_blank">
            <img className="footer_img" src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/iiiu_uz/" target="_blank">
            {" "}
            <img className="footer_img" src={instagram} alt="" />
          </a>
          <a href="https://www.facebook.com/iiiu.uz" target="_blank">
            {" "}
            <img className="footer_img" src={logo1} alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=-gEVJ27GOa4&pp=ygUZbydxaXNoIGhhcWlkYSBtb3RpdmF0c2l5YQ%3D%3D"target="_blank" >
            <img className="footer_img" src={youtube} alt="" />
          </a>
          </div>
      </section>
    </footer>
  );
}
