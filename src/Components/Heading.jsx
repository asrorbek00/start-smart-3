import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Heading = () => {
    const [url , setUrl] = useState('https://backend.startsmart.uz/banner/')
      const {data, isPending , error} = useFetch(url)
  return (
    <>
    <div className='lg:ml-32 md:ml-26 sm:ml-5'>
    <div className='flex items-center lg:gap-28 md:gap-10  px-2'>
        <div className='flex flex-col text-left lg:text-7xl md:text-5xl sm:text-4xl mt-12 w-1/4' data-aos='fade-right'>
        <h1 className='smm lg:font-extrabold md:font-extrabold sm:font-bold'>SMM</h1>
            <h1 className='font-semibold text-[#DBFF45]'>SOCIAL MEDIA MARKETING</h1>
            
        </div>
        <div className='animat' data-aos='fade-up' data-aos-duration='1000'>
              
        </div>
        </div>
        { data && data.map((info)=>{
      return  <div className='lg:w-3/5 md:w-3/5 sm:w-4/5 pl-3 pt-3 font-sans mt-5 ' data-aos='fade-left '>
            <p className=''>{info.text}</p>
        </div>
    })}
    </div>
 
    
    </>
  )
}

export default Heading