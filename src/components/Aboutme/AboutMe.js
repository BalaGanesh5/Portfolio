import React from 'react'
import "./about.css"



 const AboutMe = (props) => {
   
    return (
        <div className="about-container">
             <p>{props.about.bio}</p>
        </div>
       
    )
}

export default AboutMe;

