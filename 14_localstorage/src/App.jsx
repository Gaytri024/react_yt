import React from 'react'

const App = () => {
  // localStorage.clear()
  // localStorage.setItem('name', 'Gaytri Gautam')
  // sessionStorage.setItem('age' , 21)
  // const name = localStorage.getItem('name')
  // console.log(name);
  // const age = sessionStorage.getItem('age')
  // console.log(age);
  // localStorage.removeItem('name')
  // sessionStorage.removeItem('age')
  const data = {
    username : 'Gaytri Gautam',
    email:'gaytrigautam234@gmailcom',
    password:'232111'
  }
  //using JSON.Stringify() to convert the data object in string format and store it in localStorage 
  // localStorage.setItem('data', JSON.stringify(data))
  //using JSON.parse() to conver the string data back to object format and store in localStorage
  // const storedData = JSON.parse(localStorage.getItem('data'))
  // console.log(storedData);


 const storedData = JSON.parse(localStorage.getItem('data'))
 console.log(typeof data)
  
  return (
    <div>
      App
    </div>
  )
}

export default App
