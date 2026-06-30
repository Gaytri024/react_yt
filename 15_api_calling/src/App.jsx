import React from 'react'
import axios from 'axios'
import { useState } from 'react'

// fetch using for the api call and display the data on the screen.
// fetch is a built-in function in javascript that allows you to make HTTP requests to a server and requests data fron an API.
// const App = () =>{
  
//   async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json();
//     console.log(data);
//   }

//  return (
//   <div>
//     <button onClick = {getData}>GetData</button>
//   </div>

//  )
// }



// use of axios to get data from api and display it on the screen.       
const App = () => {

  const [data, setData] = useState([])
  const getData = async () => {

    const response = await axios.get("https://picsum.photos/v2/list")
    setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        <ul>
          {data.map(function(elem,idx){
            return <li key={idx}>Hello , {elem.author}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
