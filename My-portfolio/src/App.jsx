import React,{useState} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {  Switch } from "@mui/material"

const App = () => {
  
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'light' : 'dark', 
      primary: {
        main: '#4A0404' ,
      },
      secondary: {
        main: '#90caf9',

      },
    },
  });
  return (
   <>
   <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <Switch checked={toggleDarkMode } onChange={toggleDarkTheme} />
        
      </div>
    
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio/>
        <Contact />
        <Footer />
       
    </ThemeProvider>
   </>
  )
}

export default App