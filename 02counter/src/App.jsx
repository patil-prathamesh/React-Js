import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  const addValue = () => {
    counter++;
    setCounter(counter)
  }
  const removeValue = () => {
    counter--;
    setCounter(counter)
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button style={{margin:'4px'}} onClick={addValue}>Add Value</button> 
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
