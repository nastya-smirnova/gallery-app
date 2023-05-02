import "./App.css";
import Imgix from "react-imgix";
import React, { useState } from "react";
import Imagegallery from "./components/Imagegallery";

function App() {
  // const [imageGallery, setImage] = React.useState([
  //   { src: "./images/one.jpg", title: "one" },
  //   { src: "./images/two.jpg", title: "two" },
  //   { src: "./images/three.jpg", title: "three" },
  //   { src: "./images/four.jpg", title: "four" },
  // ]);

  document.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      e.target.remove();
    }
  });

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
        <div className="image">
          <img src="./images/one.jpg" title="one" width={200} height={200} />
          <img src="./images/two.jpg" title="two" width={200} height={200} />
          <img
            src="./images/three.jpg"
            title="three"
            width={200}
            height={200}
          />
          <img src="./images/four.jpg" title="four" width={200} height={200} />
          <Imgix
            src="http://surl.li/gpwad"
            alt="missing"
            width={200}
            height={200}
          />
          <Imgix
            src="http://surl.li/gpwam"
            alt="missing"
            width={200}
            height={200}
          />
          <Imgix
            src="http://surl.li/gpwar"
            alt="missing"
            width={200}
            height={200}
          />
          <Imgix
            src="http://surl.li/gpwbe"
            alt="missing"
            width={200}
            height={200}
          />
        </div>
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
