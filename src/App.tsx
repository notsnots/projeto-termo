import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [frase, setFrase] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/frase').then(async (responde) => {
      const data = await responde.json();
      setFrase(data.frase);
    })
  });


  return (
   <div>
      <h1>Frase do momento: {frase || "Nenhuma"}</h1>
   </div>
  )
}

export default App
