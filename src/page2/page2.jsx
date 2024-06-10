import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pictures_icon from "../imglar/hp2-col-1-icon.png";
import pictures_icon1 from "../imglar/hp2-col-2-icon.png";
import pictures_icon2 from "../imglar/businessmen.webp";
import pictures_icon3 from "../imglar/hp2-col-4-icon.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { color } from "framer-motion";

export default function App() {
  <Swiper>
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    modules={[Autoplay]}
  </Swiper>;

  return (
    <div className="page2_div">
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide className="slider_1">
          <div className="slider">
            <h2 className="slider_h2">Nodavlat oliy ta'lim muassasi</h2>
            <h1 className="slider_h1">
              INNOVATSION VA IJTIMOIY- <br />
              IQTISODIYOT UNIVERSITETI
            </h1>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider_2">
          <div className="slider_two">
            <section className="slider_slider">
              <h1 className="h1">
                INNOVATSION VA IJTIMOIY- <br />
                IQTISODIYOT UNIVERSITETI
              </h1>
            </section>
            <section>
              <h3 className="h3">
                Ta'lim jarayonini halqaro standartlar asosida ishlab chiqilgan
                davlat ta'lim <br />
                standartlar asosida amalga oshirish va kadrlar buyurtmachilari
                takliflari va <br />
                iqtiiyotning rivojlanish strategiyasi asosida yuqori malalkali
                kadrlar tayyorlash.
              </h3>
              <section className="chizi"></section>
            </section>
          </div>
        </SwiperSlide>
      </Swiper> 
      <div className="pictures">
        <section className="pictures_1">
          <div className="li">
            <img src={pictures_icon} alt="" />
            <h3>Universitet hayoti</h3>
          </div>
        </section>
        <section className="pictures_2">
          <div className="li">
            <img src={pictures_icon1} alt="" />
            <h3>Ta'lim yo'lanishlari</h3>
          </div>
        </section>
        <section className="pictures_3">
          <div className="li">
            <img className="qa" src={pictures_icon2} alt="" />
            <h3>Professional o'qituvchilar</h3>
          </div>
        </section>
        <section className="pictures_4">
          <div className="li">
            <img src={pictures_icon3} alt="" />
            <h3>Universitet istiqbol rrejalari</h3>
          </div>
        </section>
      </div>
    </div>
  );
}
