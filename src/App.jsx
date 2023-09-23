import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValues =()=>{
    // setCount(count + 1);
    if (count < 10) {
      // Only update the count if it's less than 10
      setCount(count + 1);
    }
  }
  const removeValues =()=>{
    // setCount(count -1)
    if (count > 0) {
      // Only update the count if it's greater than 0
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>use hooks </h1>
      <h2>Count Value: {count}</h2>
      <button onClick={addValues}>Add value</button>
      <br />
      <button onClick={removeValues}>Remove Value</button>
    </>
  )
}

export default App
