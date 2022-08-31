import React from "react";
import { useContext } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { ThemeContext } from "./ThemeContext/ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
