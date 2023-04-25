import "./App.css";
import Imgix from "react-imgix";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
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
        </nav>
        <h1 className="transbox">MEMORIES</h1>
        <h3>Bring your memories all together in one place</h3>
      </header>
      <body className="body">
        <div className="image">
          <Imgix
            src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80"
            alt="missing"
            width={200}
            height={200}
          />
          <Imgix
            src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="missing"
            width={200}
            height={200}
          />
          <Imgix
            src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="missing"
            width={200}
            height={200}
          />
          <Imgix
            src="https://images.unsplash.com/photo-1556647944-11bc0d4e0c4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
            alt="missing"
            width={200}
            height={200}
          />
          <Imgix
            src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80"
            alt="missing"
            width={200}
            height={200}
          />
        </div>
        <div className="text">
          <p>
            A photograph keeps a moment from running away. A photograph is the
            pause button of life. Hard to forget such strong memories with the
            best people.
          </p>
          <p>Happy times come and go, but the memories stay forever.</p>
        </div>
      </body>
      <footer className="footer">
        <p>Contuct us | Instagram | Telegram | LinkedIn </p>
      </footer>
    </div>
  );
}

export default App;
