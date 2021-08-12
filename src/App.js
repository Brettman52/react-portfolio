import React, {useState} from 'react'
import './App.css';
import styled from 'styled-components'
import Nav from './Nav'
import Hero from './Hero'
import Bio from './Bio'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import {ThemeProvider} from 'styled-components';

const AppWrapper = styled.div`
    height: 100vh;
    min-width: 390px;
`

const Main = styled.div `
  background-color: rgb(40, 44, 54);
  /* height: 100vh; */
  font-family: Arial, Helvetica, sans-serif;

  a {
      text-decoration: none;
  }

  a:visited {
    color: white;
  }

  a.active{
    color: ${props => props.theme.primary};
  }
`

function App() {

    const [menuToggle,
        setMenuToggle] = useState(false);

    const menuToggler = () => {
        setMenuToggle(!menuToggle);
    }

    const theme = {
            // primary: "#bb86fc" ,
            primary: "teal", 
            secondary: "#F5F5F5",
            heading: "30px",
            text: "20px"
        
    }

    return (
        <AppWrapper>
            <ThemeProvider theme={theme}>
                <Main>
                    <Nav
                        menuToggle={menuToggle}
                        menuToggler={menuToggler}
                       />
                    <Hero/>
                    <Bio/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </Main>
            </ThemeProvider>
        </AppWrapper>
    );
}

export default App;
