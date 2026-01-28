import React, { useState } from 'react';
import './App.css';
import './MisEstilos.css';

function App() {
  // 1. Definir el estado
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi App en React está funcionando</h1>
        <p>Has hecho click {cuenta} veces</p>
      </header>
      <div className='button-container'>
        <button onClick={() => setCuenta(cuenta + 1)}>
          Aumentar
        </button>

        <button onClick={() => setCuenta(cuenta - 1)}>
          Disminuir
        </button>
      </div>
    </div>
  );
}

export default App;

