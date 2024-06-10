import React from "react";
import ReactPlayer from "react-player";
import "./MUi.css";
import "../imglar/slider-hp2-2.webp";
import col from "../imglar/col-bg-1.jpg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
export default function materialUi() {
  return (
    <div className="conta">
      <Tabs className="pagee7">
        <div className="page7">
          <div>
            <TabList className="buttons">
              <Tab className="Tab">Afzalliklar</Tab>
              <Tab className="Tab">Shaxsiy rivojlaish</Tab>
              <Tab className="Tab">O'qituvchilar</Tab>
            </TabList>
          </div>

          <TabPanels className="page7_tab">
            <TabPanel className="clasname">
              <h2 className="hh2">Nega IIIUni tanlash kerak?</h2>
              <p id="p">
                Talabalarimizga nafaqat bilim berish hamda ularning amaliy
                ko’nikmalari va qobiliyatlarini rivojlantirishga
                ko’maklashibgina qolmay, o’zlari qiziqqan sohalarini chuqurroq
                o’rganishga, shaxsiy xususiyatlarini doimiy ravishda
                yuksaltirishga yordam beramiz.
              </p>
            </TabPanel>
            <TabPanel className="clasname">
              <h2 className="hh2">Shaxsiy rivojlanish</h2>
              <p id="p">
                IIIU ta’lim berish bilan birgalikda, talabalarda muloqot qilish,
                samarali qaror qabul qilish, ijodkorlik, <br /> tizimli
                muammolarni aniqlash va hal etish, fikr-mulohazalarni qabul
                qilish va o’ziga bo’lgan <br /> ishonchni oshirishga yordam
                beradi.
              </p>
            </TabPanel>
            <TabPanel className="clasname">
              <h2 className="hh2">O'qituvchilar</h2>
              <p id="p">
                IIIUda dars mashg’ulotlarini ko’p yillik ilmiy va amaliy
                tajribaga ega bo’lgan professor- <br />
                o’qituvchilar hamda amaliyotchi mutaxassislar olib borishadi.
              </p>
            </TabPanel>
          </TabPanels>
        </div>
        <section className="page7_yarm">
          <ReactPlayer url="https://www.youtube.com/watch?v=C5pKtnmHTxg&t=2s&ab_channel=HarvardUniversity" />
        </section>
      </Tabs>
    </div>
  );
}
