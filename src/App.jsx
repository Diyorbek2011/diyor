import React from "react";
import "./App.css";
import Page1 from "./page1/Page1";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import All from "./All";
import Universitet from "./universitet/Universitet";
import Batafsil from "./universitet/Batafsil";
import Footer from "./footer/footer";
import Fakultetla from "./page4/page4";
import Qabul from "../src/Qabul/Qabul"
import NotFound from  "../src/NotFound/NotFound"
import Loader from "./Loader/Loader.jsx";
import Rahbariyat from "./Rahbaryat/Rahbariyat";
import Batafsil1 from "../src/Batafsil2/Batafsil10";
import Batafsil2 from "../src/Batafsil2/Batafsil2";
import Batafsil3 from "./Batafsil2/Batafsil3"
import Batafsil4 from "../src/Batafsil2/Batafsil4"
import Aloqa from "../src/Aloqa/Contact";
import { useState } from "react";

function App() {
  const [Loaders, setLoaders] = useState(true);
  const [Site, setSite] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  setTimeout(() => {
    setLoaders(false);
    setSite(true);
  }, 1000);
  const handleDarkMode = () => {
    const updatedDarkMode = !darkmode;
    setDarkmode(updatedDarkMode);
  };
  return (
    <div id="Parent" className={darkmode ? 'darkMode' : ''}>
      <SignedOut>
        <div className="Signbtn_page">
          <h1 className="OPen_web">
            Sayta xush kelibsiz! <br /> Kirish uchun ro'yxatdan oting... <br />{" "}
            🔑🔑🔑
          </h1>
          <button className="open_button">
            <SignInButton />
          </button>
          <h1 className="open_h1">👆👆👆</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="Container">
          {Loaders && <Loader />}
          {Site && (
            <>
              <Page1 darkmode={darkmode} handleDarkMode={handleDarkMode}/>

              <Routes>
                <Route index element={<All />} />
                <Route path="Universitet" element={<Universitet />} />
                <Route path="Fakeltultetlar" element={<Fakultetla />} />
                <Route path="Rahbariyat" element={<Rahbariyat />} />
                <Route path="batafsil" element={<Batafsil />} />
                <Route path="Qabul" element={<Qabul />} />
                <Route path="Aloqa" element={<Aloqa />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/Batafsil1" element={<Batafsil1/>} />
                <Route path="/Batafsil2" element={<Batafsil2/>} />
                <Route path="/Batafsil3" element={<Batafsil3/>} />
                <Route path="/Batafsil4" element={<Batafsil4/>} />
                
              </Routes>
              <Footer />
            </>
          )}
        </div>
      </SignedIn>
    </div>
  );
}
export default App;
