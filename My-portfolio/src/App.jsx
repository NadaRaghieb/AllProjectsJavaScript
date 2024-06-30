import React,{useState} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Portfolio from './components/portfolio/Portfolio'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import {  Button } from "@mui/material"
import Courses from './components/courses/Courses'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import HeaderAr from './components/header/Header.ar'
import AboutMeAr from './components/about/AboutMe.ar'
import ExperienceAr from './components/experience/Experience.Ar'


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('en'); //By default, the language is English

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
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
          aria-label={isDarkMode ? 'Light mode' : 'Dark mode'}>
          {isDarkMode ? <IoMoonOutline style={{width:'2.2rem', height:'2.2rem',color:'#444444'}}/> : <MdOutlineWbSunny  style={{width:'2.2rem', height:'2.2rem', color:'#F9EA15'}}/>}
        </Button>
        <Button onClick={() => handleLanguageChange('ar')} variant={language === 'ar' ? 'black' : 'wight'}>
            العربية
          </Button>
          <Button onClick={() => handleLanguageChange('en')} variant={language === 'en' ? 'black' : 'wight'}>
         English
          </Button>
      </div>
      {language === 'ar' ? <HeaderAr /> : <Header />}
        <Nav language={language} />
        {language === 'ar'? <AboutMeAr/> : <About/>} 
        {language === 'ar'? <ExperienceAr/> : <Experience/>} 
        <Courses language={language}/>
        
        <Contact  language={language}/>
         <Footer  language={language}/>
      </ThemeProvider>
   </>
  )
}

export default App