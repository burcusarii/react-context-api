import React from "react";
import { ThemeContextProvider } from "./Contexts/ThemeContext";
import "./App.css";
import { LangContextProvider } from "./Contexts/LangContext";
import Container from "./Components/Container";
function App() {
  return (
    <div>
      <LangContextProvider>
        <ThemeContextProvider>
          <Container></Container>
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
