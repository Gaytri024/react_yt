import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Submit Successfully ");
    // form handling  default behavior by using preventDefault() method 
  } 
  return (
    <div>
      {/* write any thing like e, elem & val etc */}
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <input type="text" placeholder='Enter your name' />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
