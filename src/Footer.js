import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {FirstChar} from './Nav'
import {Element} from 'react-scroll'
import EmailIcon from '@material-ui/icons/Email';


const FooterEl = styled.footer`
   background-color: rgb(22, 26, 34);
   padding-top: 28px;
   padding-bottom: 15px;
   border-top: 2px solid ${props => props.theme.primary}; 
   margin-top: 20px;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 45px;
`

const GhIcon = styled(GitHubIcon)`
&& {
    font-size: 50px;
    color: ${props => props.theme.primary};
}
`

const LIIcon = styled(LinkedInIcon)`
    && {
        font-size: 60px;
        color: ${props => props.theme.primary};
    }`
const MailIcon = styled(EmailIcon)`
    && {
        font-size: 60px;
        color: ${props => props.theme.primary};
    }
`
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

    return (
        <Element name="footer">
        <FooterEl id="footer">
            <IconContainer>
                <a href="https://linkedin.com/in/bretton1" target="blank"><LIIcon/></a>
                <a href="mailto: brett.adams20@yahoo.com" subject="Nice Portfolio! - Let's Talk!"><MailIcon/></a>
                <a href="https://github.com/Brettman52?tab=repositories" target="blank"><GhIcon/></a>
            </IconContainer>
            <Year>
                2021
            </Year>
            <CreatedBy>
                Created By <FirstChar>B</FirstChar>rett <FirstChar>A</FirstChar>dams
            </CreatedBy>
        </FooterEl>
        </Element>
    )
}
