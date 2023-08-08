// App.tsx
import { useState, useEffect } from 'react';
import './App.css';
import fetchJoke from './utils/fetchJoke';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function getJoke() {
      const data =  await fetchJoke();
      setJoke(data.joke)
    }
    getJoke();
  }, []);

  async function handleClick() {
    const data =  await fetchJoke();
    setJoke(data.joke)
  }

  return (
    <div className="App">
      <p>{joke}</p>
      <button 
      onClick={handleClick}>
        New joke
      </button>
    </div>
  );
}

export default App;