import React, { useContext } from "react";
import { useLang } from "../Contexts/LangContext";
import { useTheme } from "../Contexts/ThemeContext";

function ChangeLang() {
  const { lang, setLang } = useLang();
  const { theme } = useTheme();
  return (
    <div>
      <h2>Change Language</h2>
      <div> Aktif Dil: {lang}</div>
      <div>Aktif Tema : {theme}</div>
      <br />
      <button onClick={() => setLang("tr")} style={{ marginRight: "8px" }}>
        TR
      </button>
      <button onClick={() => setLang("en")} style={{ marginRight: "8px" }}>
        EN
      </button>
      <button onClick={() => setLang("ch")}>CH</button>
      <br /> <br />
    </div>
  );
}

export default ChangeLang;
