import React from 'react'
import styled, {keyframes} from 'styled-components'
import mandesk from './images/mandesk.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {slideInLeft} from 'react-animations';
import {slideInRight} from 'react-animations';
import {fadeInUp} from 'react-animations';

const slideInRightAnim = keyframes `${slideInRight}`;
const slideInLeftAnim = keyframes `${slideInLeft}`;
const slideInUpAnim = keyframes `${fadeInUp}`;

const HeroSection = styled.section `
    height: 100vh;
`

const ManDesk = styled.img `
    height: 250px;
    animation: 1.5s ${slideInLeftAnim};
    margin-top: 50px;

    @media(min-width: 1000px){
        height: 400px;
    }
`

const HeroHeading = styled.h1 `
    color: ${props => props.theme.secondary};
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 30px;
    animation: 2s ${slideInRightAnim};
`

export const ArrowDown = styled(ExpandMoreIcon)`
    && {
        font-size: 100px;
        display: none;
        color: ${props => props.theme.primary};
        transition: all .5s ease;
        cursor: pointer;
        animation: 1.5s ${slideInUpAnim};

        &:hover {
            transform: scale(1.5);
            transition: all .5s ease;
        }

        @media(min-width: 1000px){
            display: block;
        }
    }
`

export const FlexContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90%;
`
export default function Hero(props) {
    return (
        <HeroSection id="hero">
            <FlexContainer>
                <ManDesk src={mandesk}/>
                <HeroHeading>
                    Hi, I’m Brett - problem solver and front-end developer.
                </HeroHeading>
                <a href="#bio"><ArrowDown/></a>
            </FlexContainer>
        </HeroSection>
    )
}
