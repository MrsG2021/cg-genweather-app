import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app!</h1>
        <button className="btn btn-primary">Hello</button>
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
