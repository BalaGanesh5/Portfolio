import React from 'react'
import "./projectCard.css"

const ProjectCard = ({project}) => {
    
   
    return (
        <div className="project-card">
            <p><b>Name:</b>{project.name}</p>
            <p><b>Description:</b> {project.description}</p>
            
        </div>
    )
}

export default ProjectCard
