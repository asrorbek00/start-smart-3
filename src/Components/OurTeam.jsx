import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import {  Navigation, Pagination } from "swiper/modules";
import { useFetch } from "../hooks/useFetch";

const OurTeam = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  const [url , setUrl] = useState('https://backend.startsmart.uz/team/')
  const [logourl , setLogoUrl] = useState('https://backend.startsmart.uz/logo/')
  const {data , isPending , error} = useFetch(url)
  const {data:logo } = useFetch(logourl)
  return (
    <div className="lg:mt-[650px] md:mt-20 sm:mt-20 mb-8 " id="jamoa">
      <h1 className="text-[#DBFF45] lg:text-7xl md:text-5xl text-center sm:text-3xl " data-aos='fade-up'>
        Jamoa
      </h1>
      <Swiper
        data-aos="fade-up"
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        
        modules={[ Navigation,Pagination]}
        className="mySwiper rounded-none  sm:px-16 mt-10 "
      >
      {data && data.map((image) =>{
      return  <SwiperSlide key={image.id}   >
          <img
            src={image.image}
            alt=""
            className="rounded-3xl user lg:w-full md:w-full sm:w-4/5 sm:ml-10 mt-12 "
          />
          <div className="ml-11">
          <h2 className="text-[#DBFF45] font-thin">{image.job}</h2>
          <h2 className="text-white w-44">{image.first_name} {image.last_name}</h2>
          </div>
        </SwiperSlide>
      })}
        
      </Swiper>

      <div className="grid lg:absolute lg:left-0 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:mt-56 md:mt-10 sm:mt-10 lg:px-0 sm:px-2" >
      {logo && logo.map((image) =>{
            return  <div className="py-8 px-5 " data-aos='fade-up' key={image.id}>
           <img src={image.logo} alt="" className="w-2/3" data-aos='flip-left' id={`hamkor-${image.id}`}/>
        </div>
      })}
      </div>
    </div>
  );
};

export default OurTeam;
