import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code'
import weatherPic from './images/weather-app.png';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import ReactCardFlip from 'react-card-flip';
import { ProjectTextCont } from './SingleProject';

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
    width: 90%;

`

const ProjectText = styled.p `
    color:${props => props.theme.secondary};
    padding: 15px;
    font-size: ${props => props.theme.text};

    @media (min-width: 1000px) {
        width: 75%;
    }
`

const ProjectText1 = styled.p `
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

const FlipIcon = styled(FlipCameraAndroidIcon)`
    &{
        color: white;
        margin-left: 20px;
        margin-right: 20px;

    }
`

const FlipContainer = styled.div `
        display: flex;
        justify-content: center;
        margin-top: 20px;
    `

const FlipParentButton = styled(Button)`
     && {
        background-color: ${props => props.theme.primary};
        color: black;
        font-weight: 600;

        &:hover{
            color: ${props => props.theme.primary};
    }
    }
`

const Wrapper = styled.div `
`

const Project1 = styled.div `
 background-color: rgb(22, 26, 34);
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 50px;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 75px;
`

export default function ProjectFlip() {

    const [isFlipped,
        setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(isFlipped => !isFlipped)
    }
    return (
        <Wrapper>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Project>
                    <ProjectHeading>
                        Weather App (With Hooks)
                    </ProjectHeading>
                    <AppPic src={weatherPic}/>
                    <ProjectTextCont>
                    <ProjectText>
                        The Weather App is my latest project. The Weather App was created to allow a
                        user to search for the current weather or multi-day forecast from the United
                        States and around the globe. This app was created using React, React Hooks React
                        Router, React Context, Fetch API, Styled Components, Material-UI and follows
                        responsive design princples. Further, the Weather App uses a more declarative
                        model than my previous applications.
                    </ProjectText>
                    </ProjectTextCont>
                    <ButtonContainer>
                        <a
                            href="https://weather-app-v2-p0u3681ga-brettman52.vercel.app/"
                            target="blank">
                            <LiveButton size="medium">
                                Live
                                <PlayArrowIcon/>
                            </LiveButton>
                        </a>
                        <a
                            href="https://github.com/Brettman52/WeatherApp_v2/tree/main/src"
                            target="blank">
                            <RepoButton>
                                Code<CodeIcon/>
                            </RepoButton>
                        </a>
                    </ButtonContainer>
                    <FlipContainer>
                        <FlipParentButton onClick={handleClick}>
                            Flip me!
                            <FlipIcon/>
                        </FlipParentButton>
                    </FlipContainer>
                </Project>

                <Project1>
                    <ProjectHeading>
                        Weather App (With Class Components)
                    </ProjectHeading>
                    <AppPic src={weatherPic}/>
                    <ProjectTextCont>
                    <ProjectText1>
                        This version of the Weather App is functionally the same (pun intended).
                        However, it utilizes React Class Components instead of functional components
                        with hooks.
                    </ProjectText1>
                    </ProjectTextCont>
                    <ButtonContainer>
                        <a href="https://weather-app-brettman52.vercel.app/" target="blank">
                            <LiveButton size="medium">
                                Live
                                <PlayArrowIcon/>
                            </LiveButton>
                        </a>
                        <a href="https://github.com/Brettman52/WeatherApp/tree/main/src" target="blank">
                            <RepoButton>
                                Code<CodeIcon/>
                            </RepoButton>
                        </a>
                    </ButtonContainer>
                    <FlipContainer>
                        <FlipParentButton onClick={handleClick}>
                            Flip me!
                            <FlipIcon/>
                        </FlipParentButton>
                    </FlipContainer>
                </Project1>
            </ReactCardFlip>
        </Wrapper>
    )
}
