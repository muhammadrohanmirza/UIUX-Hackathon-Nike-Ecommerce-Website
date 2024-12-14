import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import frontpic1 from '../../../public/images/front pic1.png'
import frontpic2 from '../../../public/images/front pic2.png'
import frontpic3 from '../../../public/images/front pict3.png'

import leftarrow from '../../../public/images/Fill With Left Arrow.png'
import rightarrow from '../../../public/images/Fill with Right Arrow.png'

import shose1 from '../../../public/images/shose (1).png'
import shose2 from '../../../public/images/shose (2).png'
import shose3 from '../../../public/images/shose (3).png'

import pic1 from '../../../public/images/pic (1).png'
import pic2 from '../../../public/images/pic (2).png'
import pic3 from '../../../public/images/pic (3).png'

import img1 from '../../../public/images/Image (1).png'
import img2 from '../../../public/images/Image (2).png'
import img3 from '../../../public/images/Image (3).png'
import img4 from '../../../public/images/Image (4).png'

const Hero = () => {
  return (
    <>
    
    <div className='mb-5'>
    <div className='bg-slate-100 text-center p-5 md:p-10'>
        <p className='font-extrabold text-lg md:text-xl lg:text-2xl'>Hello Nike App</p>
        <p className='text-sm md:text-base lg:text-lg'>
            Download the app to access everything Nike. 
            <Link href={'/'} className='underline font-bold'>Get Your Great</Link>
        </p>
    </div>
    <div className='text-center'>
        <div className='ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20'>
            <Image 
                src={frontpic1} 
                alt='frontpic' 
                className='w-full sm:max-w-sm md:max-w-full lg:max-w-full mx-auto' 
            />
        </div>
        <div className='pt-5 gap-3 px-4 sm:px-8 md:px-10 lg:px-20'>
            <h6 className='text-sm sm:text-base md:text-lg lg:text-xl'>First Look</h6>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>Nike Air Max Pulse</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>designed to push you past your limits and help you go to the max.</p>
        </div>
        <div className='space-x-4 gap-2  mt-3 flex flex-col items-center sm:flex-row sm:justify-center'>
            <button className='bg-black text-white w-[120px] h-[40px] rounded-3xl text-sm sm:w-[130px] sm:h-[45px] md:w-[140px] md:h-[50px] lg:w-[160px] lg:h-[55px]'>Notify Me</button>
            <button className='bg-black text-white w-[160px] h-[40px] rounded-3xl text-sm sm:w-[170px] sm:h-[45px] md:w-[180px] md:h-[50px] lg:w-[200px] lg:h-[55px]'>Shop Air Max</button>
        </div>
    </div>
</div>



<div className="flex flex-wrap justify-between items-center ml-5 mr-5">
      <span className="grid grid-cols-1">
        <h2 className="text-xl md:text-2xl font-extrabold">Best of Air Max</h2>
      </span>
      <div className="flex space-x-2 items-center">
        <p>Shop</p>
         <Image
          src={leftarrow}
          alt="left arrow"
          className="cursor-pointer"
        />
        <Image
          src={rightarrow}
          alt="right arrow"
          className="cursor-pointer"
        />
      </div>
    </div>
    <div className="">
         <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ml-2 sm:ml-0 mb-5 mt-5 gap-10'> 
        

          <Link href={'/pages/Productdetailpage'}>
          <div className="flex justify-center items-center">
  <div className="w-[300px] sm:w-[400px] bg-white cursor-pointer rounded-lg">
    <div className="w-full h-[400px] relative">
      <Image src={shose1} alt="pic1" className="bg-slate-400 w-full sm:max-w-sm md:max-w-full lg:max-w-full mx-auto" />
    </div>
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-black">Nike Air Max 97 SE</h2>
          <h3 className="text-gray-500">Men's Shoes</h3>
        </div>
        <div>
          <p className="text-black">₹ 16 995</p>
        </div>
      </div>
    </div>
  </div>
</div>
          </Link>

<div className="flex justify-center items-center">
  <div className="w-[300px] sm:w-[400px] bg-white cursor-pointer rounded-lg">
    <div className="w-full h-[400px] relative">
      <Image src={shose2} alt="pic1" className="bg-slate-400 w-full sm:max-w-sm md:max-w-full lg:max-w-full mx-auto" />
    </div>
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-black">Nike Air Max Pulse</h2>
          <h3 className="text-gray-500">Men's Shoes</h3>
        </div>
        <div>
          <p className="text-black">₹ 13 995</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-center items-center">
  <div className="w-[300px] sm:w-[400px] bg-white cursor-pointer rounded-lg">
    <div className="w-full h-[400px] relative">
      <Image src={shose3} alt="pic1" className="bg-slate-400 w-full sm:max-w-sm md:max-w-full lg:max-w-full mx-auto" />
    </div>
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-black">Nike Air Max Pulse</h2>
          <h3 className="text-gray-500">Women's Shoes</h3>
        </div>
        <div>
          <p className="text-black">₹ 13 995</p>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>

        <div className='mb-5'>
        <div className=' bg-white ml-5 sm:ml-20 mb-4'>
            <p className='font-extrabold  text-xl md:text-2xl  '>Featured</p>
        </div>
    <div className='text-center'>
        <div className='ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20'>
            <Image 
                src={frontpic2} 
                alt='frontpic' 
                className='w-full sm:max-w-sm md:max-w-full lg:max-w-full mx-auto' 
            />
        </div>
        <div className='pt-5 gap-3 px-4 sm:px-8 md:px-10 lg:px-20'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>STEP INTO WHAT FEELS GOOD</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Cause everyone should know the feeling of running in that perfect pair.</p>
        </div>
        <div className='space-x-4 gap-2  mt-3 flex flex-col items-center sm:flex-row sm:justify-center'>
            <button className='bg-black text-white w-[160px] h-[40px] rounded-3xl text-sm sm:w-[170px] sm:h-[45px] md:w-[180px] md:h-[50px] lg:w-[200px] lg:h-[55px]'>Find Your Shoe</button>
        </div>
    </div>
</div>


<div className="ml-5">
  <h2 className="text-xl md:text-2xl font-extrabold">Gear Up</h2>
</div>
<div className="flex flex-col md:flex-row md:justify-between">
  <div className="py-8 w-full md:w-[47%]">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <span className="grid grid-cols-1">
          <h2 className="text-xl md:text-2xl font-extrabold">Shop Men's</h2>
        </span>
        <div className="flex space-x-2 pr-6 items-center">
          <Image
            src={leftarrow}
            alt="left arrow"
            className="cursor-pointer opacity-30"
          />
          <Image
            src={rightarrow}
            alt="right arrow"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="w-full bg-white cursor-pointer rounded-lg">
          <div className="w-full h-[360px] relative">
            <Image
              src={img1}
              alt="pic1"
              className="bg-slate-400 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <p className="text-black">Nike Dri-FIT ADV TechKnit Ultra</p>
            <p className="text-gray-500">Men's Short-Sleeve Running Top</p>
            <p className="text-right text-black">₹ 3 895</p>
          </div>
        </div>

        <div className="w-full bg-white cursor-pointer rounded-lg">
          <div className="w-full h-[360px] relative">
            <Image
              src={img2}
              alt="pic2"
              className="bg-slate-400 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <p className="text-black">Nike Dri-FIT Challenger</p>
            <p className="text-gray-500">
              Men's 18cm (approx.) 2-in-1 Versatile Shorts
            </p>
            <p className="text-right text-black">₹ 2 495</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="py-8 w-full md:w-[47%]">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <span className="grid grid-cols-1">
          <h2 className="text-xl md:text-2xl font-extrabold">Shop Women's</h2>
        </span>
        <div className="flex space-x-2 pr-6 items-center">
          <Image
            src={leftarrow}
            alt="left arrow"
            className="cursor-pointer opacity-30"
          />
          <Image
            src={rightarrow}
            alt="right arrow"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="w-full bg-white cursor-pointer rounded-lg">
          <div className="w-full h-[360px] relative">
            <Image
              src={img3}
              alt="pic3"
              className="bg-slate-400 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <p className="text-black">Nike Dri-FIT ADV Run Division</p>
            <p className="text-gray-500">Women's Long-Sleeve Running Top</p>
            <p className="text-right text-black">₹ 5 295</p>
          </div>
        </div>

        <div className="w-full bg-white cursor-pointer rounded-lg">
          <div className="w-full h-[360px] relative">
            <Image
              src={img4}
              alt="pic4"
              className="bg-slate-400 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <p className="text-black">Nike Fast</p>
            <p className="text-gray-500">
              Women's Mid-Rise 7/8 Running Leggings with Pockets
            </p>
            <p className="text-right text-black">₹ 3 795</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className='mb-5'>
        <div className=' bg-white ml-5 sm:ml-20 mb-4'>
            <p className='font-extrabold  text-xl md:text-2xl  '>Don't Miss</p>
        </div>
    <div className='text-center'>
        <div className='ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20'>
            <Image 
                src={frontpic3} 
                alt='frontpic' 
                className='w-full sm:max-w-sm md:max-w-full lg:max-w-full mx-auto' 
            />
        </div>
        <div className='pt-5 gap-3 px-4 sm:px-8 md:px-10 lg:px-20'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>FLIGHT ESSENTIALS</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        </div>
        <div className='space-x-4 gap-2  mt-3 flex flex-col items-center sm:flex-row sm:justify-center'>
            <button className='bg-black text-white w-[160px] h-[40px] rounded-3xl text-sm sm:w-[170px] sm:h-[45px] md:w-[180px] md:h-[50px] lg:w-[200px] lg:h-[55px]'>Shop</button>
        </div>
    </div>
</div>
       
<div className="flex flex-wrap justify-between items-center ml-5 mr-5">
  <span className="grid grid-cols-1">
    <h2 className="text-xl md:text-2xl font-extrabold">The Essentials</h2>
  </span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4">
  {/* Men's Section */}
  <div className="flex flex-col items-center justify-center h-auto mb-5 mt-5">
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] cursor-pointer rounded-lg">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] relative flex items-center justify-center">
        <Image
          src={pic1}
          alt="pic1"
          className="bg-slate-400 rounded-lg w-full h-full object-cover"
        />
        <button className="absolute bottom-5 left-6 px-4 py-2 bg-white text-black rounded-2xl z-10">
          Men's
        </button>
      </div>
    </div>
  </div>

  {/* Women's Section */}
  <div className="flex flex-col items-center justify-center h-auto mb-5 mt-5">
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] cursor-pointer rounded-lg">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] relative flex items-center justify-center">
        <Image
          src={pic2}
          alt="pic2"
          className="bg-slate-400 rounded-lg w-full h-full object-cover"
        />
        <button className="absolute bottom-5 left-6 px-4 py-2 bg-white text-black rounded-2xl z-10">
          Women's
        </button>
      </div>
    </div>
  </div>

  {/* Kids' Section */}
  <div className="flex flex-col items-center justify-center h-auto mb-5 mt-5">
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] cursor-pointer rounded-lg">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] relative flex items-center justify-center">
        <Image
          src={pic3}
          alt="pic3"
          className="bg-slate-400 rounded-lg w-full h-full object-cover"
        />
        <button className="absolute bottom-5 left-6 px-4 py-2 bg-white text-black rounded-2xl z-10">
          Kids'
        </button>
      </div>
    </div>
  </div>
</div>


<div className="flex items-center justify-center mt-5 mb-5">
  <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:gap-12 lg:gap-20">
    <div className="flex flex-col space-y-4">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Icons</h1>
      <a href="#" className="text-gray-500 hover:text-gray-700">Air Force 1</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Huarache</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Air Max 90</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Air Max 95</a>
    </div>
    <div className="flex flex-col space-y-4">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Shoes</h1>
      <a href="#" className="text-gray-500 hover:text-gray-700">All Shoes</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Custom Shoes</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Jordan Shoes</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Running Shoes</a>
    </div>
    <div className="flex flex-col space-y-4">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Clothing</h1>
      <a href="#" className="text-gray-500 hover:text-gray-700">All Clothing</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Modest Wear</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Hoodies & Pullovers</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Shirts & Tops</a>
    </div>
    <div className="flex flex-col space-y-4">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Kids'</h1>
      <a href="#" className="text-gray-500 hover:text-gray-700">Infant & Toddler Shoes</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Kids' Shoes</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Kids' Jordan Shoes</a>
      <a href="#" className="text-gray-500 hover:text-gray-700">Kids' Basketball Shoes</a>
    </div>
  </div>
</div>




    </>
  )
}

export default Hero