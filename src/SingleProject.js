import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ProjectHeading = styled.h2 `
    color: ${props => props.theme.secondary};
    text-align: center;

`

const Project = styled.div `
    background-color: rgb(22, 26, 34);
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 50px;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 30px;
`

const AppPic = styled.img `
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const ProjectText = styled.p `
    color:${props => props.theme.secondary};
    padding: 15px;
    font-size: ${props => props.theme.text};
    @media (min-width: 1000px) {
        width: 75%;
    }
`

const LiveButton = styled(Button)`
&& {
    background-color: ${props => props.theme.primary};
    color: black;

    &:hover{
            color: ${props => props.theme.primary};
    }
}
`
const RepoButton = styled(Button)`

    && {
    background-color: ${props => props.theme.primary};
    color: black;
    margin-left: 10px;

    &:hover{
            color: ${props => props.theme.primary};
    }

    }`

const ButtonContainer = styled.div `
    text-align: center;
    `

export const ProjectTextCont = styled.div`
    display: flex;
    justify-content: center;
`

export default function SingleProject(props) {

    return (
        <div>
            <Project>
                <ProjectHeading>
                    {props.heading}
                </ProjectHeading>
                <AppPic src={props.imgSrc}/>
                <ProjectTextCont>
                <ProjectText>
                    {props.desc}
                </ProjectText>
                </ProjectTextCont>
                <ButtonContainer>
                    {props.heading !== "React Portfolio" && <a href={props.liveLink} target="blank"><LiveButton size="medium">
                        Live
                        <PlayArrowIcon/>
                    </LiveButton>
                    </a>
                    }
                    <a href={props.codeLink} target="blank"><RepoButton>
                        Code<CodeIcon/>
                    </RepoButton>
                    </a>
                </ButtonContainer>
            </Project>
        </div>
    )
}
