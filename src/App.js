import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          THIS IS A PWA APP
        </h1>
        <a
          className="App-link"
          href="https://noldran.github.io/nopwa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to a NO PWA APP on same domain
        </a>
        <a
          className="App-link"
          href="https://www.google.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to a site on a different domain
        </a>
      </header>
    </div>
  );
}

export default App;
