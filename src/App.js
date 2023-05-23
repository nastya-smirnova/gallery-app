import "./App.css";
import React from "react";
import Gallery from "./components/Gallery";
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1 className="transbox">MEMORIES</h1>
          <h3 className="h3">Bring your memories all together in one place</h3>
        </header>
      </div>
      <body>
        <Gallery />
      </body>
      <footer className="footer-container">
        <div className="footer">
          <h3>Want to partner with us?</h3>
          <p>
            If you would like to find out some more information, Anastasia is
            excited to help.
          </p>
          <h3 className="contactinfo">smirnova.anastasia.k@gmail.com</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
