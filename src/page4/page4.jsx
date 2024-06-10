import React, { useState, useEffect } from "react";
import "./page4.css";

export default function Page4() {
  const [users, setUsers] = useState([]);
  const [link, setLink] = useState("http://localhost:3000/baka");

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch('/data.json');
        const data = await req.json();
        console.log(data.baka);
        setUsers(data.baka);
      } catch (error) {
        console.error("Siz olmoqchi bo'lgan ma'lumotda xatolik bor", error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="page4">
      <h1 className="m">Bakalavriyat ta'lim yo'nalishi</h1>
      <div className="gridlar">
        {users.map((data)=> (
          <>
            <div className="grid1">
              <img className="img" src={data.image} alt="" />
              <h3>{data.nom}</h3>
              <span className="sam">{data.malumot}</span>
              <a className="grid1a" href="https://t.me/iii_universiteti" target="_blank"><p className="grid1a">{data.batafsil}</p></a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
  