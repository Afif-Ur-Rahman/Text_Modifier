import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "white") {
      setMode("black");
      document.body.style.color = "white";
      document.body.style.background = "linear-gradient(45deg, rgba(121, 35, 0, 0.8) 50%, rgba(255, 255, 255) 50%, rgba(243, 112, 0, 0.8) 51%)";
      showAlert("Theme has been changed", "success");
    } else {
      setMode("white");
      document.body.style.color = "black";
      document.body.style.background = "linear-gradient(45deg, rgba(243, 112, 0, 0.8) 50%, rgba(255, 255, 255) 50%, rgba(121, 35, 0, 0.8) 51%)";
      showAlert("Theme has been changed", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <TextForm
        heading="Enter the Text to analyze"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
