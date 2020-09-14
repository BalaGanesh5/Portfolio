import React from 'react'
import "./sideNav.css";
import bala from '../../image/bala.jpg'


const SideNav = ({handleSectionClick}) => {
    return (
        
        <div className="side-nav">
                <img
                className= "avatar"
                src={bala}
                alt="avatar"
                />
            
            <h2 className="main-name"> Bala</h2>
            <p className="subtitle">A man with Dreams. . .</p>
            <div className="sections-list">
            <p className="section-list-element" onClick= {()=> handleSectionClick("about")}>About Me</p>
            <p className="section-list-element" onClick= {()=> handleSectionClick("projects")}>Projects</p>
            <p className="section-list-element" onClick= {()=> handleSectionClick("skills")}>Skills</p>            
            </div>
            
        </div>
    )
}

export default SideNav
