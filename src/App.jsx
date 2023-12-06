import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import OurWorks from './components/OurWorks'
import { useFetch } from './hooks/useFetch'
import Footer from './Components/Footer'
import Loading from './Components/Loading'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import OurTeam from './Components/OurTeam'
import Portfolio from './Components/Portfolio'
import Services from './Components/Services'
import Heading from './Components/Heading'



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