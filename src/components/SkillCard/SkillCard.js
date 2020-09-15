import React from 'react'
import "./skillCard.css"
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SkillCard = ({skill}) => {
 
    const [props,set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 6, tension: 550, friction: 20 } }))
     
    return (
        <animated.div 
        className="skill-card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}>
        {skill}
        </animated.div>
    )
}

export default SkillCard
