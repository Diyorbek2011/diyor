import React from 'react';
import './Batafsil10.css';
import profileImage from "../imglar/qobl.jpeg";

function App() {
  return (
    <div className="contaainer">
      <div className="profile">
        <img src={profileImage} alt="Qobiljon Zohidov" className="profile-image" />
      </div>
      <div className="bio">
        <h1>Zohidov Qobiljon Toirjonovich</h1>
        <h2>Biografiya</h2>
        <p className="bold">Zohidov Qobiljon Toirjonovich</p>
        <p><span className="bold">Universitet rektori, tarix fanlari nomzodi, dotsent</span></p>
        <p>1989-1994 yillarda Toshkent davlat sharqshunoslik institutida tahsil olgan. 1994-2010 yillar mobaynida institutning turli lavozimlarda faoliyat olib borgan. Jumladan, aspirant, o‘qituvchi, dotsent, institut qoshidagi litsey direktorining o‘quv ishlari bo‘yicha muovini, dekan muovini, kafedra mudiri, dekan lavozimlari.</p>
        <p>2010-2017 yillar mobaynida Toshkent islom universitetida doktorant, kafedra mudiri, o‘quv ishlari bo‘yicha prorektor, universitet qoshidagi “Ziyo zuiko ta’lim maskani” nodavlat ta’lim muassasasi direktori lavozimlarida faoliyat olib borgan</p>
        <p>2017 yildan boshlab, GRAND TA’LIM nodavlat ta’lim muassasasi filial direktori, akademik o‘quv-uslubiy boshqarma rahbari vazifasida faoliyat olib borgan.</p>
        <p>2022 yildan “Yangi asr universiteti” nodavlat oliy ta’lim muassasasi rektori lavozimida faoliyat olib bormoqda.</p>
        <p className="bold">Ilmiy yo‘nalishi</p>
        <p>Q. Zohidov 2005 yili “24.00.02-islom tarixi va manbashunosligi” ixtisosligi bo‘yicha tarix fanlari nomzodi dissertatsiyasini yoqladi.</p>
        <p>2015 yilda ushbu ixtisoslik bo‘yicha dotsent ilmiy unvonini oldi. Uning shu kunga qadar 60 ga yaqin ilmiy ishlari chop etilgan. Xususan, 1 ta darslik, 10 ta o‘quv qo‘llanma, 3 ta o‘quv uslubiy qo‘llanma va “Toshkent islom madaniyati gavhari” fotoalbomi arab tiliga tarjimasi muallifi. Uning “Islom tarixi” o‘quv qo‘llanmasi “Yilning eng yaxshi darsligi va o‘quv qo‘llanmasi-2014” Respublika ko‘rik tanlovida 3-o‘rinni, u muharirrilik qilgan “Islom va aqidaparast oqimlar” o‘quv qo‘llanmasi esa, 1-o‘rinni egallagan.</p>
      </div>
    </div>
  );
}

export default App;
