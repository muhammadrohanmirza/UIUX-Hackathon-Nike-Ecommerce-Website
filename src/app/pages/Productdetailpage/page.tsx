import React from 'react'
import shose1 from '../../../../public/images/shose (1).png'
import Image from 'next/image'
const page = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        alt="shoe1"
        className="lg:w-1/2 w-full lg:h-auto h-1/2  object-center rounded"
        src={shose1}
      />
      <div className="lg:w-96 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-5xl title-font font-medium mb-1">
        Nike Air Max 97 SE
        </h1>
        <p className="leading-relaxed mt-5">
        Turn style on its head with this crafted take on the Nike Air Max 97 SE. 
        Its "inside out"-inspired construction, including unique layering and exposed
         foam accents, ups the ante on this timeless Jordan Brand silhouette. Details 
         like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading,
          rich mixture of materials and aged midsole aesthetic give this release an artisan
           finish.
        </p>
       
        <div className="mt-5">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <br />
          <button className='bg-black text-white mt-5 w-[160px] h-[40px] rounded-3xl text-sm sm:w-[170px] sm:h-[45px] md:w-[180px] md:h-[50px] lg:w-[200px] lg:h-[55px]'>Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page