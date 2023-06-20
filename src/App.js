import "./App.css";
import React from "react";
import Gallery from "./components/Gallery";
import "react-alice-carousel/lib/alice-carousel.css";
import "./MediaQuery.css";

const App = () => {
  return (
    <div className="App">
      <header className="headerContainer">
        <h1 className="headerName">Memories</h1>
        <h3 className="headerMotto">
          Bring your memories all together in one place
        </h3>
      </header>
      <main className="mainContent">
        <Gallery />
      </main>
      <footer className="footerContainer">
        <div className="footer">
          <p>Want to partner with us?</p>
          <p>
            If you would like to find out some more information, Anastasia is
            excited to help.
          </p>
          <a
            href="mailto:smirnova.anastasia.k@gmail.com?cc=smirnowa.anastasiia@gmail.com&subject=Email to Anastasia"
            target="_blank"
            className="email"
          >
            smirnova.anastasia.k@gmail.com🔗
          </a>
          <p>Anastasia Smirnova © 1998 - 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
