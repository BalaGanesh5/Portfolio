import React from 'react'
import "./sideNav.css";
import bala from '../../image/bala.jpg'
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SideNav = ({ handleSectionClick }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension:500, friction: 20 } }))

    return (
        <div className="side-nav">

            <img
                className="avatar"
                src={bala}
                alt="avatar"
            />

            <h2 className="main-name"> Bala</h2>
            <p className="subtitle">A man with Dreams. . .</p>
            <animated.div
                className="sections-list"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0,-10,1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
            </animated.div>

        </div>
    )
}

export default SideNav
