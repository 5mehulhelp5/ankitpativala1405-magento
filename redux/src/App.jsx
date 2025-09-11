import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import counterActions from './redux/actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter App with Redux</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
        <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
        <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
      </div>
    </>
  )
}

export default App
