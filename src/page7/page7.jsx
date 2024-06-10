import React from "react";
import "./page7.css";
import oo from "../imglar/def.webp";
import { ChakraProvider, AspectRatio } from "@chakra-ui/react";
export default function page7() {
  return (
    <div className="page7_div">
      <div className="page_yarim">
        <section className="sectio">
          <h1>Qabul 2023-2024</h1>
          <p>
            Hujjatlar Olmazor tumani, Usta Shirin ko‘chasi, 116-uy manzili
            bo’yicha qabul qilinadi.
          </p>
        </section>
        <a
          href="https://admission.tiiu.uz/auth/purpose-of-application"
          target="_bank"
        >
          <section className="sectionn">
            <img src={oo} alt="" />
            <h1>IIU ga hujjat topshirish</h1>
          </section>
        </a>
      </div>
      <div className="dox">
        <section className="manzil-1">
          <h1>1-Manzil</h1>
          <h3>UIC GROUP</h3>
          <h4>Tel: 71 200 70 07</h4>
        </section>
        <iframe
          className="ifreme"
          width="400px"
          height="385"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?&amp;&amp;hl=en&amp;q=UIC%20group+(1-Manzil)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
        <section className="manzil-1">
          <h1>2-Manzil</h1>
          <h3>Iqtidor IT academy</h3>
          <h4>Tel: +998 90 788 48 80</h4>
        </section>
        <iframe
          className="ifreme"
          width="400"
          height="385"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=450&amp;&amp;hl=en&amp;q=Iqtidor%20IT%20Academy+(2-Manzil)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    </div>
  );
}
