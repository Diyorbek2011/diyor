import React from "react";
import "./qabul.css";

const Qabul = () => {
  return (
    <div className="qabul">
      <section className="qabul1">
        <h1>Shoshiling !</h1>
        <h1>2024-Yilga qabul boshlandi</h1>
        <h1>Tezda ro'yxatdan o'ting va o'z o'rningizni egallang !</h1>
        <section>
          {" "}
          <h1>
            Maqsadimiz: <br />
            Bizning saytimizning maqsadi - foydalanuvchilarimizga eng <br />
            so'nggi va eng ishonchli ma'lumotlarni taqdim etish. Biz bilim olish
            va <br />
            o'rganishni oson va samarali qilish uchun shu yerdamiz.
          </h1>
        </section>
        <header>
          <a
            href="https://admission.tiiu.uz/auth/purpose-of-application"
            target="_blank"
          >
            <button>Ro'yxatdan o'tish</button>
          </a>
        </header>
        <h2 style={{ color: "white" }}>
          Missiyamiz: <br />
          Bizning missiyamiz - dunyo bo'ylab millionlab insonlarga <br />
          bilim va ma'lumotlarni yetkazish orqali ularning hayotini boyitish.{" "}
          <br />
          Biz sifatli kontent va xizmatlar orqali foydalanuvchilarimizning{" "}
          <br />
          ishonchini qozonishga intilamiz.
        </h2>
      </section>
    </div>
  );
};

export default Qabul;
