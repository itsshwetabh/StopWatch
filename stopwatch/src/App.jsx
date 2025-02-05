import { useState,useRef } from 'react'
import './App.css'


function App() {

  const [Time,SetTime] = useState(0);
  const[Started,setStarted] = useState(false)
  let x = useRef(null);
  function startTimer()
  {

    if(!Started)
    {
      x.current = setInterval(()=>SetTime((prev)=>prev+1),1000)
      setStarted(true)
    }
  }


  function stopTimer(){
      clearInterval(x.current)
      setStarted(false)
  }

  return(
    <>
      <h1>StopWatch</h1>
      <br></br>
      <h2>Time: {Time}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={()=>SetTime(0)}>Reset</button>
      <button onClick={stopTimer}>stop</button>
    </>
    
  )
}

export default App
