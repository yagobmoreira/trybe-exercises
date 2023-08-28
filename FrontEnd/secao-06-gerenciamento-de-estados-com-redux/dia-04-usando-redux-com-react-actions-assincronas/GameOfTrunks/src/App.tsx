import { useState } from "react";
import Home from "./components/Home"
import { useDispatch } from "react-redux";
import { Dispatch } from "./types";
import { fetchCharacter } from "./redux/actions";

function App() {
  const [characterName, setCharacterName] = useState('');
  const dispatch: Dispatch = useDispatch();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  }

  return (
    <>
      <input
        onChange={handleChange}
        value={characterName} 
        type="text" 
        placeholder="Digite o nome do personagem" />
      <button onClick={() => dispatch(fetchCharacter(characterName))}>Pesquisar</button>
      <Home />
    </>
  )
}

export default App
