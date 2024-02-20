import React,{useState} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import {  Button } from "@mui/material"
import Courses from './components/courses/Courses'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'light' : 'dark',
    },
  });

  return (
   <>
   <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', alignItems: 'center', margin: '1.6rem' }}>
      <Button
          className={isDarkMode ? 'sun-icon' : 'moon-icon'}
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Light mode' : 'Dark mode'}
        >
          {isDarkMode ? <IoMoonOutline style={{width:'2.2rem', height:'2.2rem',color:'#444444'}}/> : <MdOutlineWbSunny  style={{width:'2.2rem', height:'2.2rem', color:'#F9EA15'}}/>}
        </Button>
      </div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Courses/>
        <Portfolio/>
        <Contact />
         <Footer />
      </ThemeProvider>
   </>
  )
}

export default App