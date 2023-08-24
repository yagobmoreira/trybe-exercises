import { useSelector, useDispatch } from 'react-redux'
import { actionCreator } from './redux/actions';
import './App.css'

type GlobalState = {
  count: number,
}

function App() {
  const globalState = useSelector((state: GlobalState) => state);
  const { count } = globalState;
  const dispatch = useDispatch();

  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(actionCreator())}>Incrementar 1</button>
      <button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button>
    </>
  )
}

export default App
