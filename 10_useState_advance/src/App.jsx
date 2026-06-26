import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Sarthak',Age:23})
  const btnClicked = ()=>{
    // DeStructing Method
    const newNum = {...num};
    newNum.user = 'Harsh'
    newNum.Age = 28
   setNum(newNum)
  }
  
  return (
    <div>
      <h1>{num.user},{num.Age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
