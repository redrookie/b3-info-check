import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect} from 'react'

function App() {

  const [value,setValue] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setValue(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Your data is: {value}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
