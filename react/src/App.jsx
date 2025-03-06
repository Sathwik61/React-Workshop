import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  
  useEffect(async()=>{
    const response = await fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => console.log(data));
            
  },[count]);
  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={()=>{setCount(count+1 )}}>Update</button>
    </>
  )
}

export default App
