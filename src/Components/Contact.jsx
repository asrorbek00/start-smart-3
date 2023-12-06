import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";


import { useFetch } from "../hooks/useFetch";


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { info } from "autoprefixer";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  
   const sendAlert = ()=> toast.success('Your message send')
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    messages: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://backend.startsmart.uz/contact-us/';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        sendAlert()

        // Clear the form fields
        setFormData({
          first_name: '',
          last_name: '',
          phone: '',
          messages: '',
        });
      } else {
        console.error('Error:', response.status, response.statusText);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  
  
  
  
  return (
    <>
    <div className=" lg:mt-[600px] sm:mt-10 border-[2px] border-[#2a2a2a] bg-[#1D232A]  " id="contact">
      <h1
        className="lg:text-6xl md:text-5xl  py-2 sm:text-3xl mb-20  text-center text-[#DBFF45]"
        data-aos="fade-up"
      >
        Bog`laning
      </h1>

      <div className=" border-[2px] border-[#2a2a2a]  px-14  grid lg:grid-cols-3 gap-3  py-5">
        <div className="border-[2px] px-2 py-2  border-[#2a2a2a]  ">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="flex flex-col items-center cursor-pointer border-gray-500 py-5 px-3 rounded-lg shadow-slate-950   shadow-sm hover:shadow-gray-600 "
          >
            <span>
              <IoCall fill="yellow" size={20} />
            </span>
            <h3 className="text-lg text-white">Telefon</h3>
            <a className="tracking-2 " href="tel:998 95 204 08 00">
            +998 95 204 08 00
            </a>
          </div>
          </div>
          <div className="border-[2px] px-2 py-2  border-[#2a2a2a]  ">
        <a href="https://www.google.com/maps/place/Start+Smart+Company/@40.755972,72.3634861,17z/data=!3m1!4b1!4m6!3m5!1s0x38bcedc34aeb9245:0x4ed71f4bc649d008!8m2!3d40.755968!4d72.366061!16s%2Fg%2F11vkjbq_0d?entry=ttu">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex  flex-col items-center cursor-pointer py-5 px-3 rounded-lg   shadow-slate-950 shadow-sm hover:shadow-gray-600"
          >
            <span>
              <MdLocationPin fill="yellow" size={23} />
            </span>
            <h3 className="text-lg text-white">Manzil</h3>
            <a className="tracking-2">Q948+CCV Андижан</a>
          </div>
        </a>
        </div>
        <div className="border-[2px] px-2 py-2  border-[#2a2a2a]  ">
        <a href={info.instagram}>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex flex-col items-center cursor-pointer py-5 px-3 rounded-lg shadow-slate-950 shadow-sm hover:shadow-gray-600"
          >
            <span>
              <FaInstagram fill="yellow" size={20} />
            </span>
            <h3 className="text-lg text-white">Instagram</h3>
            <a className="tracking-2">@start_smart_smm</a>
          </div>
        </a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <ToastContainer/>
      <div
        className="pt-7   lg:ml-12 grid border-[2px] border-[#2a2a2a] bg-[#1D232A] lg:grid-cols-2 md:grid-cols-2   lg:w-3/3 md:w-4/5 sm:grid-cols-1  rounded-xl"
        data-aos="fade-up"
      >
      
        <div className="flex flex-col  px-2 ">
        <div className="border-[2px] py-3  border-[#2a2a2a] px-2">
          <input
            type="text"
            placeholder="Ism.."
            className="rounded-3xl shadow-xl pl-8 py-3 w-full"
            required  name="first_name" value={formData.first_name} onChange={handleChange}
          />
          </div>
          <div className="border-[2px] border-t-0 py-3 px-2 border-[#2a2a2a]">
          <input
            type="text"
            placeholder="Familiya..."
            className="rounded-3xl shadow-xl pl-8 py-3 w-full"
            required  name="last_name" value={formData.last_name} onChange={handleChange}
          />
          </div>
          <div className="border-[2px] py-3 border-t-0 px-2 border-[#2a2a2a]">
          <input
            type="number"
            placeholder="Tel.."
            className="rounded-3xl shadow-xl pl-8 py-3 w-full"
            required  name="phone" value={formData.phone} onChange={handleChange}
          />
          </div>
        </div>
        
        <div className="flex flex-col -ml-3  border-[2px] border-[#2a2a2a] ">
        <div className="border-b-[2px] py-3 px-3 border-[#2a2a2a] pl-3">
          <textarea
            placeholder="Xabar.."
            className="shadow-3xl pt-3 pl-3 rounded-xl h-48  w-full"
            required  name="messages" value={formData.messages} onChange={handleChange}
          />
          </div>
          <div className="border-l-[2px] py-3 lg:ml-64 sm:ml-0 border-[#2a2a2a] ">
          <button type="submit" className="btn text-[#dbff45] rounded-3xl py-3 px-2  w-2/3 md:-ml-11 lg:ml-10 sm:ml-16  shadow-gray-700">
            Xabar Yuborish
          </button>
          </div>
          
        </div>
       
      </div>
      </form>
      

    </div>
    </>
  );
};

export default Contact;
