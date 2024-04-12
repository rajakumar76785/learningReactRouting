import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigate= useNavigate();
  function clickHandler(){
     navigate('/contact');
  }
  return (
    <div>
       <div>This is About page</div>
       <button onClick={clickHandler}>Move to contact Page</button>
    </div>
    
  )
}

export default About