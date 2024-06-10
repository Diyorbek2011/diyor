import React from "react";
import "./page3.css";
import logo1 from "../imglar/def.webp";
import logo2 from "../imglar/download.png";
import logo3 from "../imglar/qhbfewf.webp";
import rotate from "../imglar/svgexport-17.svg";
import icon from "../imglar/svgexport-18.svg";
import { AspectRatio, Center } from "@chakra-ui/react";
import "video-react/dist/video-react.css";
import video from "../imglar/Qarshi_xalqaro_universitetga_virtual_sayohat_yRvzjCgES1g_136.mp4";
import 'animate.css';

export default function page3() {
  return (
    <div className="page">
      <div className="page3">
        <div className="yarim_all">
          <div className="yarim">
            <img className="url" src={logo1} alt="" />
            <h2 className="hhh2">Biz haqimizda</h2>
          </div>
          <div className="yarim1">
            <p className="q">
              Innovatsion va ijtimoiy iqtisodiyot universiteti ilg‘or ta’lim{" "}
              <br /> texnologiyalariga asoslangan holda ijtimoiy soha va
              iqtisodiyot <br /> tarmoqlari uchun zamonaviy bilim va
              ko‘nikmalarga ega, mas’uliyatni o‘z <br /> zimmasiga olishga
              qodir, mustaqil fikrlaydigan malakali kadrlarni <br /> yetishtirib
              beruvchi nodavlat oliy ta’lim tashkiloti hisoblanadi.
            </p>
            <p className="pa">
              IIIU talaba-yoshlarga yuqori sifatli ta’lim xizmatlarini taklif
              etadi. Universitet <br /> mamlakatimizning yetakchi oliy ta’lim
              tashkiloti sifatida ijtimoiy-iqtisodiy sohadagi <br />{" "}
              o’zgarishlarga innovatsion yechimlar bilan salmoqli hissa
              qo‘shishni o‘z oldiga maqsad <br /> qilib qo’ygan.
            </p>
            <p className="span">
              <a
                className="span"
                href="https://iiiu.uz/wp-content/uploads/2022/09/image_2022-09-15_18-42-59.pdf"
              >
                Litsenziyani yuklash 📥
              </a>
            </p>
          </div>
        </div>
        <span className="QW">
          <img className="rasm" src={logo3} alt="" />
        </span>
      </div>
      <div className="page4">
        <span className="icon-play">
          <div class="rotate">
            <img src={rotate} alt="" />
          </div>
          <a className="video" href={video}>
            <img className="icon-play" src={icon} alt="" />
          </a>
        </span>
        <h1 className="btnq">IIIU bo'ylab video sayohat</h1>
        <h2 className="btnn">
          IIIUga virtual sayohat qiling va universitet faoliyati bilan batafsil{" "}
          <br />
          tanishish imkoniga ega bo’ling. Mazkur videolavhada universitet <br />{" "}
          tomonidan yaratilgan qulay shart-sharoit va keng imkoniyatlar o‘z{" "}
          <br />
          aksini topgan.
        </h2>
      </div>
      <div className="rasmla">
        <div className="parent1"></div>
        <div className="parent2">
          <h1>Qabul 2023-2024</h1>
          <h3>
            Biz shunchaki talabalarga bilim va ko‘nikmalar beribgina qolmay,
            ularga o’z kasbiy martabalarida muvaffaqiyat qozonishlariga yordam
            beramiz. Shuningdek, ularning <br /> kasbiy qobiliyatlari va
            layoqatlarini kashf etishlariga ko‘maklashamiz.
          </h3>
          <a
            className="parent_button"
            href="https://forms.gle/cQeZUwJL8PPviTTL6"
            target="_blank"
          >
            <button className="buttonn">Hoziroq hujjat topshiring</button>
          </a>
        </div>
      </div>
    </div>
  );
}
