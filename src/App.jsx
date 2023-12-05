import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import About from './components/About'
import OurWorks from './components/OurWorks'
import OurTeam from './components/OurTeam'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { useFetch } from './hooks/useFetch'
import Footer from './Components/Footer'
import Loading from './Components/Loading'



const App = () => {
  const [url , setUrl] = useState('https://backend.startsmart.uz/banner/')
      const {data, isPending , error} = useFetch(url)
  return (
    <>
    {error && <Error/>}
    {isPending && <Loading/>}
    { !error && <div>
       <Navbar/>
      <Heading/>
       
      <Services/>
      <AboutMe/>
      <About/>
      <OurWorks/>
      <Portfolio/>
      <OurTeam/>
      <Contact/>
      <Footer/>
     
    </div>}
    
    </>
  )
}

export default App