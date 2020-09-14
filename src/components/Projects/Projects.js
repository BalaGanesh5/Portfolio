import React from 'react'
import {projects} from "../Constants/ProjectsList";
import ProjectCard from "../ProjectCard/ProjectCard"



const Projects = ({projects}) => {
    
    return (
        <div className="projects-container">
        <div className="industry-skill-container">
            {
                projects.projectList.map(project => <ProjectCard project={project} />)
            }
        </div>
    </div>
    )
}

export default Projects
