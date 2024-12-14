import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const page = () => {
  return (
    
<>
<div className='w-full h-full bg-black'>
        <header className=" py-8">
      <div className="container bg-white mx-auto px-4">
        <h1 className="text-5xl text-center font-bold text-gray-800">GET HELP</h1>
        <div className="flex mt-4 bg-white items-center justify-center">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="border-l-2 border-t-2 border-b-2 border-gray-300 px-4 py-2 w-[457.33px] h-[56px] outline-none"
          />
          <button className="h-[56px] border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-md text-black font-bold py-2 px-4">
            <IoSearchOutline className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>


    
        <div className='w-[70%] float-left h-full bg-slate-400 pl-10 pr-10 border-r-2'>
        helo
        </div>
        
        
        
        
        
        <div className='w-[30%] float-right h-full bg-slate-400 pl-5 pr-5'>helo 2</div>
    </div>
    </>
  )
}

export default page