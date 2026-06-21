import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Vandana' Age={22} img="https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user='Gaytri Gautam' Age={21} img="https://images.unsplash.com/photo-1778648185777-a16f70110e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user='Tript Dubey' Age={20} img="https://images.unsplash.com/photo-1780519123579-2088d9560826?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user='Prabal Pratab' Age={23} img="https://plus.unsplash.com/premium_photo-1709399200520-89f2f5d46dbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      
    </div>
  )
}

export default App
