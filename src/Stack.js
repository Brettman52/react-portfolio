import React from 'react'
import styled from 'styled-components'
import logoStore1, {logoStore2} from './Assets/logoStore'

const StackHeading = styled.h2 `
    color: ${props => props.theme.primary};
    font-size: ${props => props.theme.heading};
    text-align: center;
    margin-bottom: 30px;
`

const Logo = styled.img `
    height: 50px;
`
const LogoText = styled.div `
    color: ${props => props.theme.secondary};
    text-align: center;
`

const ImageContainer1 = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    align-items: center;
`
const ImageContainer2 = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const LogoContainer = styled.div `
    text-align: center;
`

const Wrapper = styled.div`
 @media (min-width: 1000px) {
     margin-bottom: 100px;
 }
`

export default function Stack() {


    const LogoList1 = logoStore1.map(({src, alt, text}, i) => <LogoContainer key={i}><Logo src={src} alt={alt} /><LogoText>{text}</LogoText></LogoContainer>)
    const LogoList2 = logoStore2.map(({src, alt, text}, i) => <LogoContainer key={i}><Logo src={src} alt={alt} /><LogoText>{text}</LogoText></LogoContainer>)

    return (
        <Wrapper>
            <StackHeading>
                Tech Stack
            </StackHeading>
            <ImageContainer1>
                {LogoList1}
            </ImageContainer1>
            <ImageContainer2>
                {LogoList2}
            </ImageContainer2>

        </Wrapper>
    )
}
