import React, { useState } from 'react'
import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

const Portfolio = () => {

  useEffect(()=>{
    AOS.init()
  },[])

   const[url , setUrl] = useState('https://backend.startsmart.uz/image-company/')

   const {data , isPending , error} = useFetch(url)
   
  return (
    <div className='mt-52 lg:ml-28 md:ml-20 sm:ml-8'  id='portfolio'>
      <h1 className='lg:text-7xl md:text-5xl sm:text-4xl text-[#DBFF45] lg:-ml-20 sm:ml-3 text-center -ml-36 ' data-aos='fade-up'>Portfolio</h1>
      <div className='mt-16 lg:px-20 sm:px-0 '>
      {data && data.map((info) =>{
        return  <div className='lg:flex md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 sm:flex-row sm:border-none  max-h-60 gap-3 mt-4 mb-3 mr-3 ' data-aos='fade-up' key={info.id} id={`port-${info.id}`}>
        <img src={info.image} alt="" className='lg:w-2/3 grayscale hover:grayscale-0 sm:w-4/5 -ml-5 md:w-2/3' />
        <img src={info.logo} alt="" className='lg:w-96 grayscale hover:grayscale-0 sm:w-4/5 md:w-2/3' />
      </div>
      })}
      
      </div>

      {/* <hr  className='mt-12 border-2 border-yellow-400 w-2/3 lg:ml-[15%] sm:ml-[17%] ' data-aos='fade-right'/> */}
    </div>
  )
}

export default Portfolio