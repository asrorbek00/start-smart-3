import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLocationArrow, FaTelegram, FaTwitter } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { useFetch } from '../hooks/useFetch'
import { BiPhone } from 'react-icons/bi'



const Footer = () => {
  useEffect(() =>{
    AOS.init()
  },[])

  const [url , setUrl] = useState('https://backend.startsmart.uz/info/')
  const {data ,isPending , error} = useFetch(url)
  return (
    <>
    <div className='py-20 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 lg:gap-6 sm:gap-2 sm:ml-2 foot md:ml-10' data-aos="fade-up">
      {data && data.map((info)=>{
        return<>

        <img src='public/logo.png' alt="" className='lg:w-80 md:w-72 sm:w-52 -mt-5 cursor-pointer ' />
      
     <div className='flex-row gap-2 w-fit' data-aos="fade-up">
         <h2 className='text-xl text-white '>Menyu</h2>
         <p><a href="">Asosiy</a></p>
         <p><a href="#jamoa">Jamoa</a></p>
         <p><a href="#contact">Aloqa</a></p>
      </div>
      <div className='flex-row gap-2 lg:w-3/5' data-aos="fade-up">
         <h2 className='text-xl text-white '>Bolimlar</h2>
         <p><a href="#about">Biz Haqimizda</a></p>
         <p><a href="#portfolio">Portfolio</a></p>
         <p><a href="#jamoa">BIZNING JAMOA</a></p>
         <p><a href="#ourwork">SMM SOCIAL MEDIA MARKETING</a></p>
         <p><a href="#contact">Kontaktlar</a></p>
      </div>

      <div className='flex-row' data-aos="fade-up" key={info.id}>
         <h2 className='text-xl text-white '>Ma`lumot</h2>
         <div className='flex gap-2 mb-2'>
         <span className='flex items-center'><IoLocation size={20} fill='white'/></span>
         <p><a href=''>{info.address}</a></p>
         </div>
         <div className='flex gap-2 mb-2'>
          <span><BiPhone size={25} fill='white'/></span>
          <p><a href={`tel:${info.phone}`}>{info.phone}</a></p>
         </div>
         <div className='flex gap-2'>
          <span><FaInstagram size={25} fill='white'/></span>
          <p><a href={info.instagram}>@start_smart_smm</a></p>
         </div>
         <div className=' flex gap-5 mt-5'>
            <span><a href=""><FaTelegram size={30} fill='white'/></a></span>
            <span><a href={info.facebook}><FaFacebook size={30} fill='white'/></a></span>
            <span><a href={info.instagram}><FaInstagram size={30} fill='white'/></a></span>
            <span><a href=""><FaTwitter size={30} fill='white'/></a></span>
         </div>
         
      </div>
      </>
    })}
    
    </div>
    <hr  className='border-[1px] w-2/3 lg:ml-[18%] md:ml-[15%] sm:ml-[10%]'/>
    <p className='lg:ml-[44%] md:ml-[40%] sm:ml-[33%] mb-4 mt-2' >2023 @Start Smart</p>
    </>
  )
}

export default Footer