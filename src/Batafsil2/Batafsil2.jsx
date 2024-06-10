import React from "react";
import "./Batafsil10.css";
import profileImage from "../imglar/2022-12-30-07-02-48_1dbb5a60cd112f61d8e53b540e932f89.jpeg";

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
        <h1>Ishandjanov Baxtiyor Ilhomovich</h1>
        <h2>Biografiya</h2>
        <p className="bold">Ishandjanov Baxtiyor Ilhomovich</p>
        <p>
          <span className="bold">
            Yangi asr universiteti maʼnaviy-maʼrifiy ishlar bo‘yicha prorektori
          </span>
        </p>
        <p>
          - 1989-1994 yillari Toshkent davlat sharqshunoslik institutida tahsil
          olib, tamomlagan. So‘ngra ushbu institutda Islomshunoslik kafedrasi
          aspiranti, o‘qituvchi, katta o‘qituvchi bo‘lib faoliyat yuritgan. -
          2004 -2014 yillari Toshkent davlat sharqshunoslik instituti qoshidagi
          Olmazor akademik litseyi direktori lavozimida faoliyat yuritgan. -
          Baxtiyor Ishandjanov shuningdek, 2014-2016 yillari O‘zbekiston davlat
          jahon tillari universiteti huzuridagi chet tillarni o‘qitishning
          innovatsion metodikalarini rivojlantirish Respublika ilmiy-amaliy
          markazi Akademik litsey va kasb-hunar kollejlarida o‘kuv uslubiy
          chora-tadbirlarni amalga oshirish guruhi boshlig‘i vazifasida
          ishlagan. - 2017 yildan 2022 yilga qadar Grand ta‘lim plyus NTM arab
          tili o‘qituvchisi bo‘lib ishlab kelgan. -2022 yildan Yangi asr
          universiteti maʼnaviy-maʼrifiy ishlar bo‘yicha prorektori lavozimiga
          tayinlandi
        </p>
      </div>
    </div>
  );
}

export default App;
