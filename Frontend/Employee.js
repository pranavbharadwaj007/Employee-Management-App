import React from 'react'
import "./emple.css"
function Employee({employe,handleclk}) {
    const empdata=employe.map((em,index)=>{
        return(
            <div className='emp-div' key={index} >
                <p>
               ID: <strong> {em.id}</strong>
                </p>
                <p>
                Name: <strong>{em.name}</strong>    
                </p>
                <p>
                Age: <strong>{em.age}</strong>    
                </p>
                <p>
                Position: <strong>{em.desig}</strong>    
                </p>
                <p>
                Experience: <strong>{em.exp}</strong>    
                </p>
                <button className='btn2' onClick={()=>handleclk(em.id)}>Delete</button>
            </div>
        )
    })
  return (
    <div>{empdata}</div>
  )
}

export default Employee