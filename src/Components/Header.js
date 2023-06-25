import React from "react";
import { useTheme } from "../Contexts/ThemeContext";
import { useLang } from "../Contexts/LangContext";

function Header() {
  const { theme, setTheme } = useTheme();
  const { lang } = useLang();
  return (
    <div>
      <h1>Header</h1>
      <button
        onClick={() =>
          setTheme(theme === "darkmode" ? "lightmode" : "darkmode")
        }
      >
        Temayı Değiştir
      </button>
      <br /> <br />
      <div>Aktif Dil : {lang}</div>
      <div>Aktif Tema : {theme}</div>
    </div>
  );
}

export default Header;
