import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)
    console.log(task);
    
    setTitle('')
    setDetails('')
  }
const deleteNote =(idx)=> {
const copyTask = [...task];  
 copyTask.splice(idx, 1);
 setTask(copyTask);
}

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 flex-col gap-4 p-10 '>
         <h1 className='text-4xl font-bold'>Add Notes</h1>

         {/* PEHLA INPUT FOR HEADING */}
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 w-full flex items-start flex-row border-2 py-2  rounded outline-none'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* DETAIL WLA INPUT */}
          <textarea
            type="text"
            placeholder='write Details'
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 rounded outline-none'
            value={details}
            onChange={(e) => {
               setDetails(e.target.value)
            }}
          />
         
         
          <button className='bg-white font-medium w-full text-black outline-none px-5 py-2 rounded
          active:bg-gray-300
          '>Add Note</button>
        
      </form>
      
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
         
         return <div key={idx} className='h-52 w-40 p-4 text-black bg-cover items-start justify-start rounded-2xl bg-[url("https://imgs.search.brave.com/tnpoElOZJ6CyUrU4cdC9v2UtoTpYva61MCegxmBan0o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFHR054dWU3/X1kvMS8wLzExMzF3/LVVsWlNtRGcwRHNJ/LmpwZw")]'>
          <div>
          <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
          <p className='text-gray-600 leading-tight text-sm font-medium mt-2'>{elem.details}</p>
          </div>
          <button onClick={()=>{
            deleteNote(idx)
          }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs  mt-5 rounded font-bold text-white'>Delete</button>
         </div>
          })}
        </div>
      </div>
   </div>

  )
}

export default App
