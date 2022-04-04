import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [serverlessResult, setServerlessResult] = useState('')

  useEffect(() => {
    fetch('https://my-worker.ytg.workers.dev/')
      .then(res => res.json())
      .then(res => {
        setServerlessResult(res?.hello)
        console.log('serverless Result', res)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={{ color: 'red', fontSize: '30px' }}>serverlessResult: {serverlessResult}</p>
      </header>
    </div>
  );
}

export default App;
