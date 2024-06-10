import React from "react";
import "./Batafsil10.css";
import profileImage from "../imglar/2rasm.jpeg";

function App() {
  return (
    <div className="contaainer">
      <div className="profile">
        <img
          src={profileImage}
          alt="Qobiljon Zohidov"
          className="profile-image"
        />
      </div>
      <div className="bio">
        <h1>Mamatov Dilmurad Narmuratovich</h1>
        <h2>Biografiya</h2>
        <p className="bold">Mamatov Dilmurad Narmuratovich</p>
        <p>
          <span className="bold">
            Yangi asr universiteti o‘quv va ilmiy ishlar bo‘yicha prorektori
          </span>
        </p>
        <p>
          2005-2010 yillarda Nizomiy nomidagi Toshkent davlat pedagogika
          universitetini bakalavr, magistratura va aspiranturada tahsil olgan.
          2013 yil 2 oktyabrdan - 26 noyabrgacha Hindistonda o‘tkazilgan
          “Development of Technical Education to meet the Global Needs” mavzusi
          bo‘yicha malaka oshirish kursini tamomlagan. 2017 yil 3 oktyabrda
          pedagogika fanlari bo‘yicha falsafa doktori (PhD) dissertatsiya ishini
          muvaffaqiyatli himoya qilgan. 2019 yilda dotsent ilmiy unvonini olgan.
          Hozirda “Raqamli iqtisodiyot sharoitida taʼlimda korporativ
          hamkorlikni pedagogik loyihalashtirish” mavzusida doktorlik (DsC)
          dissertatsiyasi ustida ilmiy izlanish olib bormoqda. Dilmurod Mamatov
          o‘zining 20 yillik ilmiy–pedagogik faoliyati davomida 4 ta
          monografiya, 1 ta darslik, 5 ta o‘quv qo‘llanma, 20 tadan ortiq
          metodik qo‘llanma, 70 dan ortiq ilmiy–nazariy va ilmiy–metodik
          maqolalar, shulardan 5 tasi Scopus maʼlumotlar bazasi ro‘yxatidagi
          jurnallarda chop ettirgan. Fan doktori ilmiy darajasini beruvchi ilmiy
          seminar aʼzosi hamda Xalq taʼlim vazirligi huzuridagi Respublika
          taʼlim markazi ilmiy-metodik kengash raisi sifatida faoliyat yuritib
          kelmoqda. U o‘z ilmiy-pedagogik faoliyati davomida 1 nafar fan doktori
          (PhD), 6 nafar magistr va 12 nafar bakalavrlarni tayyorlagan. 17 nafar
          tadqiqotchiga opponent bo‘lgan. D. Mamatov 2013 yil 15 noyabrda
          xalqaro seminar (Jansons institute of technology)da “Technical
          Education: Global Trends and Challanges” mavzusi bo‘yicha qilgan
          maʼruzasi xalqaro eʼtirof etilgan. Seul (Janubiy Koreya), Moskva,
          Sankt-Peterburg, Qozon (Rossiya), Torgovishte (Ruminiya), Praga
          (Chexiya), Dubay (BAA) shaharlarida ilmiy seminar va simpoziumlarda
          o‘z maʼruzalari bilan ishtirok etgan. 2021 yilda “O‘zbekiston
          mustaqilligining 30 yilligi” ko‘krak nishoni bilan mukofotlangan.
          2013, 2014 yillarda “Beruniy” nomli davlat stipendiyasi sohibi hamda
          “Yil talabasi” tanlovi g‘olibi. 2022 yildan Yangi asr universiteti
          o‘quv va ilmiy ishlar bo‘yicha prorektori.
        </p>
      </div>
    </div>
  );
}

export default App;
