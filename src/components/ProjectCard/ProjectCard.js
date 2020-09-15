import React from 'react'
import "./projectCard.css"
import { useSpring, a } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ProjectCard = ({project}) => {
    const [props,set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 110, friction: 210 } }))
       
   
    return (
        <a.div className="project-card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, -1, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        >
            <p><b>Name:</b>{project.name}</p>
            <p><b>Description:</b> {project.description}</p>
            
        </a.div>
    )
}

export default ProjectCard
