import React from 'react'
import styled from 'styled-components'
import SingleProject from './SingleProject'
import projectData from './projectStore'
import ProjectFlip from './ProjectFlip'
import {Element} from 'react-scroll'

const ProjectSection = styled.section `
    margin-top: 300px;
`
const SectionHeading = styled.h2 `
    color: ${props => props.theme.primary};
    text-align: center;
    font-size:  ${props => props.theme.heading};
    margin-bottom: 0px;
    padding-top: 30px;
    margin-bottom: 20px;
    `


export default function Projects() {
    
    const projects = projectData.map(({heading, imageSrc, desc, liveLink, codeLink}, i)=> 
    <SingleProject key={i} heading={heading} imgSrc={imageSrc} desc={desc} liveLink={liveLink} codeLink={codeLink}/>)

    return (
        <Element name="projects">
        <ProjectSection id="projects">
            <SectionHeading>
                Projects
            </SectionHeading>
            <ProjectFlip/>
            {projects}
        </ProjectSection>
        </Element>
    )
}
