import React from 'react'
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import AboutMe from "./../Aboutme/AboutMe"
import "./sectionContainer.css"





const SectionContainer = ({about, projects,skills, selectedHeading, selectedQuote, selectedSection}) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
              <h1 className="main-heading">{selectedHeading}</h1>
                 <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about:<AboutMe about={about}/>,
                        skills:<Skills skills={skills}/>,
                        projects:<Projects projects={projects}/>

                    }[selectedSection]
                }
            </div>
        </div>
    )
}

export default SectionContainer
