import { useState } from 'react'
import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, []);

  return (
    <div>
      <h1>React Java Full Stack Project</h1>
      <p>{message}</p>
    </div>
  );

}

export default App
