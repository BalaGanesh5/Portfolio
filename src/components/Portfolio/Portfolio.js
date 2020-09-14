import React from 'react'
import "./portfolio.css"

import SideNav from "./../SideNav/SideNav"
import SectionContainer from "../SectionContainer/SectionContainer"


const Portfolio = ({handleSectionClick, 
    about, 
    projects,
    skills,
    selectedHeading, 
    selectedQuote,
    selectedSection}) => {
    
    return (
        <div className="portfolio-container">
            
        <div className="sidenav-container">
           <SideNav handleSectionClick={handleSectionClick}/>
        </div>
        <div className="main-section-container">
            <SectionContainer
                about={about}
                skills={skills}
                projects={projects}
                selectedHeading={selectedHeading}
                selectedQuote={selectedQuote}
                selectedSection={selectedSection}/>
        </div>
        
        </div>
    )
}

export default Portfolio
