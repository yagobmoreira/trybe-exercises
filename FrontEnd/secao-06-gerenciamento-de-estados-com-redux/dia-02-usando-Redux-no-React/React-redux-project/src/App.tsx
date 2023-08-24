import { useSelector } from 'react-redux'
import './App.css'

type GlobalState = {
  count: number,
}

function App() {
  const globalState = useSelector((state: GlobalState) => state);
  const { count } = globalState;

  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button>Incrementar 1</button>
      <button>Incrementar 5</button>
    </>
  )
}

export default App
