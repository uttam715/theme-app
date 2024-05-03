import { useRef } from "react";
import "./App.css";
import Info from "./info";

function App() {
  const themeRef = useRef(null);

  function themeHandleClick() {
    if (themeRef.current.classList.contains("info")) {
      themeRef.current.classList.replace("info", "darktheme");
    } else {
      themeRef.current.classList.replace("darktheme", "info");
    }
  }
  return (
    <div className="main">
      <div className="info" ref={themeRef}>
        <div className="title">
          Title
          <span className="theme" onClick={themeHandleClick}>
            theme
          </span>
        </div>

        <Info value="First Name"></Info>
        <Info value="Last Name"></Info>
        <div className="btndiv">
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
