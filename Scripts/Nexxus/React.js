import React from 'react';
import ReactDOM from 'react-dom';
import NexxusChat from './NexxusChat';

function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <NexxusChat
        idProfile="4"
        userId="1"
        color="#FF5733" // Color personalizado
        position="bottom-left" // Posición personalizada
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
