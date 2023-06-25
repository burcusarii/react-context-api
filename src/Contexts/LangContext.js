import { createContext, useContext, useEffect, useState } from "react";

// lang context'i ve default değerinin local storage'tan alınması.
const LangContext = createContext();
const defaultLang = localStorage.getItem("lang") || "tr";

export function LangContextProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);

  // lang değerinin local storage'a yazılması.
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  const values = {
    lang,
    setLang,
  };
  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
}

// her seferinde useContext çağırmak yerine genel bir hook yazılarak componentler içerisinde bu hook kullanılır.
export const useLang = () => {
  const context = useContext(LangContext);

  //context'in contextProvider'ın altında olmaması durumunda kişiye uyarı göstermek için yazılmıştır.
  if (context === undefined) {
    throw new Error("useLang must be used within ThemeContextProvider");
  } else {
    return context;
  }
};
