import Button from './components/Button'
import Input from './components/Input'
import { useState } from 'react';
// import './App.css'

function App() {
  const [showImg, setShowImg] = useState(true);

  function handleClick() {
    setShowImg(!showImg);
  }

  return (
    <>
        {showImg && <img src="/src/assets/react.svg" />}
      <button onClick={handleClick}>
        {showImg ? 'Esconder imagem' : 'Mostrar imagem'}
      </button>
      <Input />
      <Button />
    </>
  )
}

export default App
