import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate();
  function clickHandler(){
        navigate('/about');
  }
  function backHandler(){
       navigate(-1);
  }
  return (
    <div>
      <div>Here is our Services</div>
      <button onClick={clickHandler}>Move to about Page</button>
      <button onClick={backHandler}>Go back</button>
    </div>
   
  )
}

export default Service