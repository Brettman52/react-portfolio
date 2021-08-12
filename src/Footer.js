import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import navItems from './Assets/navLinkStore'
import {MenuItems} from './Nav'
import {NavLink} from 'react-router-dom'
import {FirstChar} from './Nav'

const FooterEl = styled.footer`
   background-color: rgb(22, 26, 34);
   padding-top: 15px;
   padding-bottom: 15px;
   border-top: 2px solid ${props => props.theme.primary}; 
   margin-top: 200px;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const GhIcon = styled(GitHubIcon)`
&& {
    font-size: 40px;
    color: ${props => props.theme.primary};
}
`

const LIIcon = styled(LinkedInIcon)`
    && {
        font-size: 50px;
        color: ${props => props.theme.primary};
    }`

const Year = styled.div`
    color: ${props => props.theme.secondary};
    font-size: 20px;
    text-align: center;
    font-weight: 600;
`

const CreatedBy = styled.div`
    color: ${props => props.theme.secondary};
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    
`

export default function Footer(props) {

    const navList = navItems.map(({linkName, dest}, i) => 
    <MenuItems key={i}><NavLink onClick={props.menuToggler} to={dest}>{linkName}</NavLink></MenuItems>
);

    return (
        <FooterEl id="footer">
            {navList}
            <IconContainer>
                <a href="https://linkedin.com/in/bretton1" target="blank"><LIIcon/></a>
                <a href="https://github.com/Brettman52?tab=repositories" target="blank"><GhIcon/></a>
            </IconContainer>
            <Year>
                2021
            </Year>
            <CreatedBy>
                Created By <FirstChar>B</FirstChar>rett <FirstChar>A</FirstChar>dams
            </CreatedBy>
        </FooterEl>
    )
}
