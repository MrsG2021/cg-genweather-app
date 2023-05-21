import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Cary Glanzmann and is {""}
          <a
            className="App-link"
            href="https://github.com/MrsG2021/cg-genweather-app.git"
            target="_blank"
            without
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
