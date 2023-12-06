import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import {FaCircle} from 'react-icons/fa'

const Services = () => {

    const [url , setUrl] = useState('https://backend.startsmart.uz/service/')
  const {data , isPending , error} = useFetch(url)
    
  return (
    <div>
       <div className=" ml-8 mr-11 pt-10 -mt-3" id="services">
      <h1 className="text-center lg:text-5xl  md:text-4xl sm:text-3xl lg:mb-0 md:mb-8 sm:mb-10 text-[#DBFF45] py-5" data-aos="fade-up" data-aos-duration='1000'>XIZMATLAR</h1>
      <div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-0 md:gap-5 sm:gap-10 ">
        {data && data.map((service)=>{

        return <div className="py-2 px-2 ml-20 -mt-8 ">
        <div  className="card lg:w-fit md:w-80  flex-row items-center " data-aos="flip-left" data-aos-duration='1000' key={service.id} >
            <span className="" id={`top-${service.id}`}><FaCircle  size={17} fill="yellow"/></span>
              <p className="px-5 py-3 hover:text-white cursor-pointer text-sm" id={`text-${service.id}`}>
                {service.text}
              </p>
             
          </div>
          </div>
        })}
            
      </div>   
</div>
    </div>
    </div>
  )
}

export default Services