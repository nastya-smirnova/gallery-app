import "./App.css";
import React from "react";
import Gallery from "./components/Gallery";
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <nav className="navigation">
          <ul>
            <li className="navtransbox">
              <a href="https://www.linkedin.com/in/anastasia-smirnova-9b8931205/">
                LinkedIn
              </a>
            </li>
            <li className="navtransbox">
              <a href="https://t.me/SmirnovaVeshaet"> Telegram </a>
            </li>
            <li className="navtransbox">
              <a href="https://www.instagram.com/nasmi__nasmi/"> Instagram </a>
            </li>
          </ul>
        </nav> */}
        <h1 className="transbox">MEMORIES</h1>
        <h3>Bring your memories all together in one place</h3>
      </header>
      <body>
        <Gallery />
      </body>
    </div>
  );
}

export default App;
