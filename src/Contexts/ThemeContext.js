import React, { createContext, useEffect, useState, useContext } from "react";

// tema context'i ve default değerinin local storage'tan alınması.
const ThemeContext = createContext();
const defaultTheme = localStorage.getItem("theme") || "lightmode";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // tema değerinin local storage'a yazılması.
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

// her seferinde useContext çağırmak yerine genel bir hook yazılarak componentler içerisinde bu hook kullanılır.
export const useTheme = () => {
  const context = useContext(ThemeContext);

  //context'in contextProvider'ın altında olmaması durumunda kişiye uyarı göstermek için yazılmıştır.
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  } else {
    return context;
  }
};
