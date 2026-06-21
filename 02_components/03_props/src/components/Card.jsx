import React from 'react'

const Card = (props) => {
    // console.log(props);
  return (
    <div>
       <div className="card">
        <img src={props.img} alt="profileimage" />
       <h1>{props.user}{props.Age}</h1> 
       <p>Lorem, ipsum dolor sit amet consectetur
         adipisicing elit. Perferendis, temporibus.</p>
         <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
