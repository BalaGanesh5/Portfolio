import React from 'react'
import "./skill.css"
import {skills} from "../Constants/Skillslist";
import SkillCard from '../SkillCard/SkillCard';

const Skill = (props) => {
    console.log(skills)
    return (
        <div className="skill-container">
        <h3>Industry Skill Container</h3>
        <div className="industry-skill-container">
        {skills.industryKnowledge.map((skill, key) => <SkillCard skill= {skill} />)}
        </div>
        </div>
    )
}

export default Skill
