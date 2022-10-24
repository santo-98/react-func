import React, { useState } from "react";

function HelloWorld(props){
  const names = props.names
  const [name ,setName] = useState(names[0])
  
  let shuffleNames = () => {
    setName(names[ Math.floor(Math.random() * names.length)])
  }
  return(
    <div>
      <h1 onClick={shuffleNames}> Hello {name}!!</h1>
    </div>
  )
}


export default HelloWorld