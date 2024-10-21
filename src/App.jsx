import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>Anda telah mengklik tombol sebanyak {count} kali.</p>
      <button onClick={() => setCount(count + 1)}>Klik saya!</button>
    </div>
  );
}

export default App;
