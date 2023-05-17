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
          <h3>Bring your memories all together in one place</h3>
        </header>
      </div>
      <body>
        <Gallery />
      </body>
    </div>
  );
}

export default App;
