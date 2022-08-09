import React from "react";
import { useContext } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </div>
  );
}

export default App;
