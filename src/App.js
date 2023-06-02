import "./App.css";
import React from "react";
import Gallery from "./components/Gallery";
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="transbox">MEMORIES</h1>
        <h3 className="h3">Bring your memories all together in one place</h3>
      </header>
      <main>
        <Gallery />
      </main>
      <footer className="footer-container">
        <div className="footer">
          <h3>Want to partner with us?</h3>
          <p>
            If you would like to find out some more information, Anastasia is
            excited to help.
          </p>
          <a
            href="mailto:smirnova.anastasia.k@gmail.com?cc=smirnowa.anastasiia@gmail.com&subject=Mail to Anastasia"
            target="_blank"
            className="contactinfo"
          >
            smirnova.anastasia.k@gmail.com🔗
          </a>
          <p>Anastasia Smirnova © 1998 - 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
