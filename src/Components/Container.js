import React, { useContext } from "react";
import Header from "./Header";
import ChangeLang from "./ChangeLang";
import { useTheme } from "../Contexts/ThemeContext";
import Footer from "./Footer";

function Container() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      {" "}
      <Header></Header>
      <hr />
      <ChangeLang />
      <hr />
      <Footer />
    </div>
  );
}

export default Container;
