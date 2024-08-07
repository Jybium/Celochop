import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FcGoogle } from "react-icons/fc"
import { SiFacebook } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col justify-end items-center'>
      <form action="" className='mx-20 my-10 bg-white text-[#32343E] rounded-2xl w-96'>
        <div className='flex flex-col m-5 gap-2'>
         
         <label htmlFor="Name" className=' ml-5'>NAME</label>
          <input type="text" name="Name" id="Name" className=' px-5 bg-[#F0F5FA] rounded-md m-2 outline-none h-16'/>
          
          <label htmlFor="Email" className='ml-5'>EMAIL</label>
          <input type="email" name="Email" id="Email" className=' px-5 bg-[#F0F5FA] rounded-md m-2 outline-none h-16'/>
          
          <label htmlFor="Password" className='ml-5'>PASSWORD</label>
          <div className="relative bg-[#F0F5FA] rounded-md">
            <input type={showPassword ? 'text' : 'password'}
              name="Password" 
              id="PasswordO" 
              className=' px-5 bg-transparent m-1 outline-none h-14'/>
            <button type="button" onClick={togglePassword} className="absolute inset-y-0 right-0 pr-5 flex items-center">
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <label htmlFor="Confirm Password" className='ml-5'>CONFIRM PASSWORD</label>
          <div className="relative bg-[#F0F5FA] rounded-md">
            <input type={showConfirmPassword ? 'text' : 'password'}
              name="Password" 
              id="PasswordT" 
              className=' px-5 bg-transparent m-1  outline-none h-14'/>
            <button type="button" onClick={toggleConfirmPassword} className="absolute inset-y-0 right-0 pr-5 flex items-center">
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <div className='text-center'>
          <button type='submit' className='w-72  px-5 py-3 text-white bg-[#FF7622] rounded-md m-2'>SIGN UP</button>
          </div>
          <p className='text-center'>Already have an account? <a href='/login' className='text-[#FF7622] font-bold'>Login</a></p>
          <div className="flex justify-center gap-6 m-5">
            <SiFacebook className='h-[40px] w-[40px]' />
            <FcGoogle className='h-[40px] w-[40px]' />
            <IoLogoApple className='h-[40px] w-[40px]' />
        </div>
        </div>
      </form>
    </div>
  )
}
export default Signup