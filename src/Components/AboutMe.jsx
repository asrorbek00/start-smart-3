import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useFetch } from "../hooks/useFetch";

const AboutMe = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

  const [url, setUrl] = useState("https://backend.startsmart.uz/about/");
  const { data, isPending, error } = useFetch(url);

  

  return (<>
   
    <div className="lg:ml-32 md:ml-24 sm:ml-5 lg:mt-0 md:mt-12 sm:mt-12" >
      {data &&
        data.map((about) => {
          return (
            <div className="lg:ml-28 md:ml-20 sm:ml-5 sm:gap-0  flex  mb-24" key={about.id}>
            <div className="  w-[100%] rounded-[40%]">
              <img
                src={about.about_image}
                alt=""
                className=" rounded-3xl lg:w-[300px] lg:h-[390px] mt-20  sm:w-0 sm:h-0 "
                data-aos="fade-right"
              />
            </div>
              <div className="w-full mr-48 -mt-4 ">
              <div className=" pt-3 ">
                <h1
                  className="lg:text-5xl md:text-4xl text-[#DBFF45] mb-6 sm:text-3xl"
                  data-aos="fade-up"
                >
                  MEN HAQIMDA
                </h1>

                <p className="w-96" data-aos="fade-up">
                  {about.text}
                </p>
                </div>
                <div className="flex flex-col gap-5">
                <div className="flex items-baseline mt-12 mb-5" data-aos="fade-up">
                  <h1 className="text-6xl text-[#DBFF45]">{about.year}</h1>
                  <p>Yil Tajriba</p>
                </div>
                <div className="flex items-baseline mt-8 mb-5 " data-aos="fade-up">
                  <h1 className="text-6xl text-[#DBFF45]">{about.completed_works}</h1>
                  <p>Tugallangan Loyihalar</p>
                </div>
                <div className="flex items-baseline mt-8" data-aos="fade-up">
                  <h1 className="text-6xl text-[#DBFF45]">{about.regular_customers}</h1>
                  <p>Doimiy Mijozlar</p>
                </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    
    </>
  );
};

export default AboutMe;
