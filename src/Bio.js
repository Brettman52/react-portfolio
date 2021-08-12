import React from 'react'
import styled from 'styled-components'
import Stack from './Stack'
import {ArrowDown} from './Hero'


const BioSection= styled.section`
    height: 100vh;
`
const BioContainer = styled.div`
    padding-top: 30px;
    margin-bottom: 50px;
`

const AboutHeading = styled.h2 `
    color: ${props => props.theme.primary};
    text-align: center;
    font-size: ${props => props.theme.heading};
`

const BioText = styled.p `
    color: ${props => props.theme.secondary};
    text-align: left;
    margin-left: 5%;
    margin-right: 5%;
    font-size: ${props => props.theme.text};
    @media (min-width: 1000px) {
        margin-left: 15%;
        margin-right: 15%;
        text-align: center;

    }
`

const ArrowDown1 = styled(ArrowDown)`
&& {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
`

const FlexContainer = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
`



export default function Bio() {
    return (
        <BioSection id="bio">
            <FlexContainer>
            <BioContainer>
            <AboutHeading>
                About Me
            </AboutHeading>
            <BioText>
                I have a B.S. in Information Technology from Colorado State University and have
                completed the front-end web developement portion at Bloc Coding Bootcamp. I get
                a thrill from solving problems and building applications from scratch. My web
                dev concentration is in React. However, I also have experience in developing
                programs with vanilla JavaScript, HTML, and CSS. When I’m not working hard, I
                enjoy gaming, sports and experiencing nature. I'm eager and excited to work with
                your team of programmers and to contribute to your organization's projects.
            </BioText>
            </BioContainer>
            <Stack/>
            <a href="#projects"><ArrowDown1/></a>
            </FlexContainer>
        </BioSection>
    )
}
