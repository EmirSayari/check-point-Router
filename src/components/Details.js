import React from 'react'



function Details ({list,match}) {
    const found =list.find ((el)=>el.id==match.params.id);

    return (
  <div>
  
  <h1 className="h1"> {found.name}  </h1>
  <h2 className="h2"> {found.description}  </h2>
  <span>  <img  src={found.image}  /></span> 
  <span>  src= {  found.trailer} </span>
  
 <button>back</button>  
  
  </div>

    )

}


export default Details