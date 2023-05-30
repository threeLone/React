import { useState } from 'react';
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

function App() {
  return (
     
    <Statefull/>
  );
}

export default App;
