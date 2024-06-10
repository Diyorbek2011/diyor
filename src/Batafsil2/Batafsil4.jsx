import React from "react";
import "./Batafsil10.css";
import profileImage from "../imglar/4rasm.png";

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
        <h1>Azimbayev Jamalxon Kamildjanovich</h1>
        <h2>Biografiya</h2>
        <p className="bold">Jamolxon Komiljonovich Azimbayev</p>
        <p>
          <span className="bold">
            Yangi asr universiteti moliyaviy ishlar bo‘yicha prorektori.
          </span>
        </p>
        <p>
          Toshkent davlat sharqshunoslik institutini arab davlatlari tarixi
          yo‘nalishida o‘qib, tamomlagan. 1993-1996 yillarda Misr arab
          respublikasidagi al Azhar universitetida tahsil olgan. 2000-2008
          yillarda Toshkent davlat sharqshunoslik institutida islomshunoslik
          kafedrasida o‘qituvchi, bosh muhandis, kafedra mudiri vazifalarida
          faoliyat olib borgan. Ma’lumoti bo‘yicha mutaxassisligi: islomshunos,
          arab tili o‘qituvchisi. 2018 -2022 yillari GRAND TA’LIM PLYUS nodavlat
          ta’lim muassasasida filial rahbari, ijrochi direktor va filiallar
          koordinatori vazifalaridan ishlab kelgan. Oilali, 5 nafar farzandi
          bor. 2022 yildan Yangi asr universiteti moliyaviy ishlar bo‘yicha
          prorektori..
        </p>
      </div>
    </div>
  );
}

export default App;
