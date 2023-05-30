import { useReducer, useState } from 'react';
import './App.css';

function Statefull() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}


function Stateful() {
  const [state, setState] = useState({count: 0, user: 'hello'})
  const handleClick = () => {
    setState({
      ...state,
      const: state.count +1
      
    })
  }

  return (
    <>
      <p>{state.count}</p>
      <button onClick={handleClick}>+</button>
    </>
  ) 
}

const initialState = {count: 0}

function reducer(start, action) {
  switch (action.type) {
    case 'increment':
      return {count: start.count +1};
    case 'decrement':
      return {count:start.count -1}
    default:
      throw new Error();
  }
}

function Statefulr() {
  const [start, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {start.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}


function App() {
  return (
     
    <Statefull/>,
    <Stateful/>,
    <Statefulr/>
  );
}

export default App;
