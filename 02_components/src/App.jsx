import React from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

const App = () => {
  const user = "Gaytri Gautam";
  return (
    <div>
      {/* <h2>Hello I'm {user} </h2> */}
       <Navbar />
       <Card/>
    </div>
  )
}

export default App
