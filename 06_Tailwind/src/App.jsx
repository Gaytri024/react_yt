import React from 'react'
import Section1 from './components/section1/Section1'  
import Section2 from './components/section2/Section2' 
import Footer from './components/Footer'

const App = () => {
const users = [
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Satisfied'
  },
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Underserved'
  },
  {
    img:'https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=',
    intro:'',
    tag:'Underbanked'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661411365454-da1984968fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D',
    info:'',
    tag:'Undertaked',

  },
    {
    img:'https://plus.unsplash.com/premium_photo-1661764903947-a3b74774a63e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8',
    intro:'',
    tag:'Understand'
  },
  {
    img:'https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'UnderGraduate'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661609187240-168f956e08cd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    info:'',
    tag:'Described',

  }

]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      <Footer />
    </div>
  )
}

export default App
