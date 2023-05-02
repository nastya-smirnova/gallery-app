import "./App.css";
import Imgix from "react-imgix";
import React, { useState } from "react";
import Gallery from "./components/Gallery";
import GalleryItem from "./components/GalleryItem";

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
      <body className="body">
        <Gallery />
        <div>
          {/* <button id="back" onclick={back}>
            Back
          </button>
          <button id="back" onclick={next}>
            Next
          </button> */}

          {/* <a href="#" class="previous">
            &laquo; Previous
          </a>
          <a href="#" class="next">
            Next &raquo;
          </a> */}
        </div>
      </body>
    </div>
  );
}

export default App;
