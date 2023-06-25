import React from "react";
import { useLang } from "../Contexts/LangContext";
import { useTheme } from "../Contexts/ThemeContext";

function Footer() {
  const { lang } = useLang();
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {" "}
      <h2>Footer</h2>
      <div> Aktif Dil: {lang}</div>
      <div>Aktif Tema : {theme}</div>
      <br />
      <div>
        <button
          onClick={() =>
            setTheme(theme === "lightmode" ? "darkmode" : "lightmode")
          }
        >
          Temayı Değiştir
        </button>
      </div>
    </div>
  );
}

export default Footer;
