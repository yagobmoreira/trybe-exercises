import { useState } from "react";
import './App.css'

function App() {
const [name, setName] = useState<string>('');
  return (
    <>
      <label>
        Nome:
        <input value={name} onChange={({target}) => setName(target.value)}/>
      </label>
      <h1>Olá, {name} !</h1>
      <button onClick={ () => setName('') }>Apagar!</button>
    </>
  );
}

export default App;
