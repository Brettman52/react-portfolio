import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Element} from 'react-scroll'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {bounce} from 'react-animations'


const ConHeading = styled.h2`
    color: ${props => props.theme.primary};
    font-size: ${props => props.theme.heading};
    text-align: center;

`

const EndText = styled.p`
    color: ${props => props.theme.secondary};
    text-align: center;
    font-size: ${props => props.theme.text};
    margin-left: 8%;
    margin-right: 8%;
`

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
`

const bounceAnimation = keyframes`${bounce}`;

const Arrow = styled(ArrowDownwardIcon)`
    && {
        color: ${props => props.theme.secondary};
        font-size: 50px;
        animation: 5s ${bounceAnimation};
    }
`
export default function Contact() {
    return (
        <Element name="contact">
            <ConHeading>Like What You See?</ConHeading>
            <EndText>I'd love to hear from you! Let's talk about possible opportunities with your organization, my projects, or let's simply have a chat.</EndText>
            <ArrowContainer>
                <Arrow/>
                <Arrow/>
                <Arrow/>
            </ArrowContainer>
        </Element>
    )
}
