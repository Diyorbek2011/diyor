import React, { useState, useEffect } from "react";
import "../page5/yangiliklar.css";
import bz from "../imglar/95-512.webp"
export default function Yangiliklar() {
  const [news, setNews] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch('/data.json');
        const data = await req.json();
        console.log(data.page5);
        setNews(data.page5.yangiliklar);
        setPartners(data.page5.partners);
      } catch (error) {
        console.error("Siz olmoqchi bo'lgan ma'lumotda xatolik bor", error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="page_6">
      <div className="yarm">
        <div className="div">
          <h1>Yangiliklar</h1>
          <h6 className="y1"></h6>
        </div>

        <div className="obwe">
          {news.slice(0, 1).map((item, index) => (
            <div className="rasm_01" key={index}>
              <img className="rasm1" src={item.image} alt="" />
              <h4>{item.date} / YANGILIKLAR</h4>
              <span>
                {item.title.split(' <br /> ').map((line, i) => (
                  <React.Fragment key={i}>{line}<br /></React.Fragment>
                ))}
              </span>
            </div>
          ))}
          <div className="rasm003">
            {news.slice(1).map((item, index) => (
              <div className="rasm_02" key={index}>
                <img src={item.image} alt="" />
                <section>
                  <h4>{item.date} / YANGILIKLAR</h4>
                  <span>
                    {item.title.split(' <br /> ').map((line, i) => (
                      <React.Fragment key={i}>{line}<br /></React.Fragment>
                    ))}
                  </span>
                </section>
              </div>
            ))}
          </div>
        </div>

        <div className="yarn">
          <h1 className="qqw">
            {" "}
            <img className="qw" src={bz} alt="" /> Biz bilan Hamkor Universitetlar
          </h1>
          <div className="qqq">
            {partners.map((partner, index) => (
              <section className="ff" key={index}>
                <img className="json_img" src={partner.image} alt={partner.name} />
                <h1>
                  <a className="ahref" href={partner.link} target="_blank" rel="noopener noreferrer">
                    {partner.name}
                  </a>
                </h1>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
