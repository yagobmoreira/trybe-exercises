import { useSelector, useDispatch } from 'react-redux'
import { actionCreator, actionCounterClicks } from './redux/actions';
import './App.css'

type GlobalState = {
  count: number,
  clicks: number,
}

function App() {
  const globalState = useSelector((state: GlobalState) => state);
  const { count, clicks } = globalState;
  const dispatch = useDispatch();

  const handleClick = (increment = 1) => {
    dispatch(actionCreator(increment));
    dispatch(actionCounterClicks);
  }


  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <h1>Clicks</h1>
      <h2>{clicks}</h2>
      <button onClick={() => handleClick()}>Incrementar 1</button>
      <button onClick={() => handleClick(5)}>Incrementar 5</button>
    </>
  )
}

export default App
