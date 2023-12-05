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
    <div className="mt-24  border-[1px] bg-[#1D232A]" id="contact">
      <h1
        className="lg:text-6xl md:text-5xl  py-2 sm:text-3xl  text-center text-[#DBFF45]"
        data-aos="fade-up"
      >
        Bog`laning
      </h1>

      <div className=" px-14  grid lg:grid-cols-3 gap-3  py-5">
        
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="flex flex-col items-center cursor-pointer border-2 border-gray-500 py-5 px-3 rounded-lg shadow-black shadow-lg hover:border-gray-300 "
          >
            <span>
              <IoCall fill="yellow" size={20} />
            </span>
            <h3 className="text-lg text-white">Telefon</h3>
            <a className="tracking-2 " href="tel:998 95 204 08 00">
            +998 95 204 08 00
            </a>
          </div>
        <a href="https://www.google.com/maps/place/Start+Smart+Company/@40.755972,72.3634861,17z/data=!3m1!4b1!4m6!3m5!1s0x38bcedc34aeb9245:0x4ed71f4bc649d008!8m2!3d40.755968!4d72.366061!16s%2Fg%2F11vkjbq_0d?entry=ttu">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex  flex-col items-center cursor-pointer border-2 border-gray-500 py-5 px-3 rounded-lg shadow-black shadow-lg hover:border-gray-300"
          >
            <span>
              <MdLocationPin fill="yellow" size={23} />
            </span>
            <h3 className="text-lg text-white">Manzil</h3>
            <a className="tracking-2">Q948+CCV Андижан</a>
          </div>
        </a>
        <a href={info.instagram}>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex flex-col items-center cursor-pointer border-2 border-gray-500 py-5 px-3 rounded-lg shadow-black shadow-lg hover:border-gray-300"
          >
            <span>
              <FaInstagram fill="yellow" size={20} />
            </span>
            <h3 className="text-lg text-white">Instagram</h3>
            <a className="tracking-2">@start_smart_smm</a>
          </div>
        </a>
      </div>
      <form onSubmit={handleSubmit}>
      <ToastContainer/>
      <div
        className="py-20  px-10 lg:ml-12 grid border-[1px] bg-[#1D232A] lg:grid-cols-2 md:grid-cols-2 gap-10 mt-12 lg:w-2/3 md:w-4/5 sm:grid-cols-1  rounded-xl"
        data-aos="fade-up"
      >
      
        <div className="flex flex-col gap-8 ">
        
          <input
            type="text"
            placeholder="Ism"
            className="rounded-xl shadow-xl pl-8 py-3"
            required  name="first_name" value={formData.first_name} onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Familiya"
            className="rounded-xl shadow-xl pl-8 py-3"
            required  name="last_name" value={formData.last_name} onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Tel.."
            className="rounded-xl shadow-xl pl-8 py-3"
            required  name="phone" value={formData.phone} onChange={handleChange}
          />
        </div>
        <div className="flex  gap-5">
          <textarea
            placeholder="Xabar.."
            className="shadow-xl pt-3 pl-3 rounded-xl h-36 w-80"
            required  name="messages" value={formData.messages} onChange={handleChange}
          />
          <button type="submit" className="btn btn-outline btn-accent w-20 mt-48 lg:-ml-20 md:-ml-11 ">
            Yuborish
          </button>
        </div>
       
      </div>
      </form>
      

    </div>
    </>
  );
};

export default Contact;
