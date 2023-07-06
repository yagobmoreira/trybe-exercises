import Button from './components/Button'
import Input from './components/Input'
// import './App.css'

function App() {
  function handleChange() {
    alert('Você digitou algo');
  }

  return (
    <>
      <Input onChange={ handleChange } />
      <Button />
    </>
  )
}

export default App
