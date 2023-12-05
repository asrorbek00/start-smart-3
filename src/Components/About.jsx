import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';


const About = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  const [url, setUrl] = useState("https://backend.startsmart.uz/about-me/");
  const { data, isPending, error } = useFetch(url);

  
  return (
    <>
    

        <div className='lg:ml-32 md:ml-24 sm:ml-8 pt-10 ' id='about'>
        <h1 className='text-center mr-20 lg:text-5xl md:text-4xl sm:text-3xl text-[#DBFF45]' data-aos='fade-up'>BIZ HAQIMIZDA</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  ">
        {data && data.map((info)=>{

       return <div  className='flex mt-20  -ml-1 py-3' key={info.id}>
        <div className='flex  items-center gap-2 ' id={`info-${info.id}`} >
         <div className='border-2 rounded-lg h-36 border-[#DBFF45]'></div>
        <div className='cursor-pointer' data-aos='fade-right'>
        <p className='text-[#DBFF45]'>Biz Haqimizda</p>
        <p className='w-80 hover:text-white'>{info.text}</p>
        </div> 
        </div>

        </div> 
         })}
         </div>
    </div>

    </>
  )
}

export default About