import React from 'react'

const App = () => {
function btnClicked(){
  console.log("button clicked");
}
  
  return (
    <div>
      <button onClick={btnClicked}>click</button>
    {/* <div onWheel={pageScrolling}>
<div className="page1"></div>
<div className="page2"></div>
<div className="page3"></div>
</div> */}

      {/* it's all functions work differently wrte for use at defferent places */}
      {/* <button class="btn" onClick={ function btnClicked(){
        console.log("button clicked");
      }}>Click here</button> */}

      {/* <input
      onChange ={ function (elem){
       inputChanging(elem.target.value)
      }}
       type="text" placeholder="Enter user name"/> */}

       {/* <div
        onMouseMove={(elem)=>{
        console.log(elem.clientY);
       }}
       className="box"
       >

       </div> */}
    </div>
  )
}

export default App
