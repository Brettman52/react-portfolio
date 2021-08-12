import React from 'react'
import styled from 'styled-components'
import portPic from './images/PortfolioPortrait-Cropped.jpg';
import MenuIcon from '@material-ui/icons/Menu';
// import {Link, NavLink} from 'react-router-dom';
import navItems from './Assets/navLinkStore'
import {Link} from 'react-scroll'

const NavBar = styled.nav `
    background-color: rgb(22, 26, 34);
    height: ${props => !props.menuToggle
    ? "10vh"
    : "35vh"};
    transition: all 0.7s ease;
    overflow: hidden;
`

const NameAndPicContainer = styled.div `
    display: flex; 
    align-items: center;
    margin-left: 10px;

`
const MenuContainer = styled.div `
    height: 10vh;
    display: flex;
    align-items: center;
`
const Name = styled.div `
    color:${props => props.theme.secondary};
    font-size: 24px;
    margin-left: 9px;
    font-weight: 550;
`

const PortPic = styled.img `
    width: 70px;
    height: 70px;
    border-radius: 50%;
    padding: 5px;
    transition: all .5s ease;

    &:hover{
        transform: scale(1.5);
        transition: all .5s ease;
    }
`

const MasterContainer = styled.div `
    display: flex;
    justify-content: space-between;
`

export const MenuItems = styled.li `
    list-style: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 15px;
`

const HamIcon = styled(MenuIcon)`
&& {
    color: ${props => props.theme.primary};
    margin-right: 20px;
    font-size: 35px;
    cursor: pointer;
}
`

export const FirstChar = styled.span`
    color: ${props => props.theme.primary};
`


export default function Nav(props) {

        // const navList = navItems.map(({linkName, dest}, i) => 
        // <MenuItems key={i}><NavLink onClick={props.menuToggler} to={dest}>{linkName}</NavLink></MenuItems>
        // );

        const navList = navItems.map(({linkName, dest}, i) => 
        <MenuItems key={i}><Link activeClass="active" offset={-150} onClick={props.menuToggler} to={dest}>{linkName}</Link></MenuItems>
        );
        
    return (
        <div>
            <NavBar menuToggle={props.menuToggle}>
                <MasterContainer>
                    <NameAndPicContainer>
                        <PortPic src={portPic}/>
                        <Name><FirstChar>B</FirstChar>rett <FirstChar>A</FirstChar>dams</Name>
                    </NameAndPicContainer>
                    <MenuContainer>
                        <HamIcon onClick={props.menuToggler}/>
                    </MenuContainer>
                </MasterContainer>
                <ul>
                  {navList}
                </ul>
            </NavBar>
        </div>

    )
}
