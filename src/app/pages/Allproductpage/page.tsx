import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

import product1 from '../../../../public/product image/Rectangle.png'
import product2 from '../../../../public/product image/Rectangle (1).png'
import product3 from '../../../../public/product image/Rectangle (2).png'

import product4 from '../../../../public/product image/Rectangle (3).png'
import product5 from '../../../../public/product image/Rectangle (4).png'
import product6 from '../../../../public/product image/Rectangle (5).png'

import product7 from '../../../../public/product image/Rectangle (6).png'
import product8 from '../../../../public/product image/Rectangle (7).png'
import product9 from '../../../../public/product image/Rectangle (8).png'

import product10 from '../../../../public/product image/Rectangle (9).png'
import product11 from '../../../../public/product image/Rectangle (10).png'
import product12 from '../../../../public/product image/Rectangle (11).png'

import product13 from '../../../../public/product image/Rectangle (12).png'
import product14 from '../../../../public/product image/Rectangle (13).png'
import product15 from '../../../../public/product image/Rectangle (14).png'

import product16 from '../../../../public/product image/Rectangle (15).png'
import product17 from '../../../../public/product image/Rectangle (16).png'
import product18 from '../../../../public/product image/Rectangle (17).png'

import product19 from '../../../../public/product image/Rectangle (18).png'
import product20 from '../../../../public/product image/Rectangle (19).png'
import product21 from '../../../../public/product image/Rectangle (20).png'

import product22 from '../../../../public/product image/Rectangle (21).png'
import product23 from '../../../../public/product image/Rectangle (22).png'
import product24 from'../../../../public/product image/Rectangle (23).png'

import product25 from '../../../../public/product image/Rectangle (24).png'
import product26 from '../../../../public/product image/Rectangle (25).png'
import product27 from '../../../../public/product image/Rectangle (26).png'

import product28 from '../../../../public/product image/Rectangle (27).png'
import product29 from '../../../../public/product image/Rectangle (28).png'
import product30 from '../../../../public/product image/Rectangle (29).png'
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col sm:flex-row space-x-4 sm:space-x-4 space-y-4 sm:space-y-0">
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 p-4  pt-20 border-gray-200">
      <h2 className="text-2xl font-bold mb-4">New (500)</h2>
        <ul className="space-y-2 border-b-2">
          <li className="hover:text-orange-500 cursor-pointer">Shoes</li>
          <li className="hover:text-orange-500 cursor-pointer">Sports Bras</li>
          <li className="hover:text-orange-500 cursor-pointer">Tops & T-Shirts</li>
          <li className="hover:text-orange-500 cursor-pointer">Hoodies & Sweatshirts</li>
          <li className="hover:text-orange-500 cursor-pointer">Jackets</li>
          <li className="hover:text-orange-500 cursor-pointer">Trousers & Tights</li>
          <li className="hover:text-orange-500 cursor-pointer">Shorts</li>
          <li className="hover:text-orange-500 cursor-pointer">Tracksuits</li>
          <li className="hover:text-orange-500 cursor-pointer">Jumpsuits & Rompers</li>
          <li className="hover:text-orange-500 cursor-pointer">Skirts & Dresses</li>
          <li className="hover:text-orange-500 cursor-pointer">Socks</li>
          <li className="hover:text-orange-500 cursor-pointer">Accessories & Equipment</li>
        </ul>

        <div className="mt-6 border-b-2">
          <h3 className="flex items-center gap-56 cursor-pointer font-semibold mb-2">
            Gender <IoIosArrowUp size={25}/>
          </h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Women</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Unisex</span>
            </label>
          </div>
        </div>

        <div className="mt-6 border-b-2">
          <h3 className="flex items-center gap-56 cursor-pointer font-semibold mb-2">
            Kids <IoIosArrowUp size={25}/>
          </h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Boys</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Girls</span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="flex items-center gap-32 cursor-pointer font-semibold mb-2">
            Shop By Price <IoIosArrowUp size={25}/>
          </h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Under ₹ 2 500.00</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span >₹ 2 501.00 - ₹ 7 500.00</span>
            </label>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 pt-32">
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-600 flex text-xl items-center space-x-1">
            <span>Hide Filters</span>
          </button>
          <button className="flex items-center text-gray-600">
            Sort By <MdOutlineKeyboardArrowDown size={22} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 pb-10 gap-6">
          {/* Product Card 1 Group*/}
          <div className="border p-4">
            <Image
              src={product1}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Air Force 1 Mid '07</h3>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP: ₹ 10,795.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product2}
              alt="Nike Court Vision Low Next Nature"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Court Vision Low Next Nature</h3>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP: ₹ 4,995.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product3}
              alt="Nike Air Force 1 PLT.AF.ORM"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Air Force 1 PLT.AF.ORM</h3>
            <p className="text-gray-500 text-sm">Women's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP: ₹ 8,695.00</p>
          </div>

            {/* Product Card 2 Group*/}
          <div className="border p-4">
            <Image
              src={product4}
              alt="Nike Air Force 1 React"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Air Force 1 React</h3>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 13 295.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product5}
              alt="Air Jordan 1 Elevate Low"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Air Jordan 1 Elevate Low</h3>
            <p className="text-gray-500 text-sm">Women's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 11 895.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product6}
              alt="Nike Standard Issue"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Standard Issue</h3>
            <p className="text-gray-500 text-sm">Women's Basketball Jersey</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 2 895.00</p>
          </div>

            {/* Product Card 3 Group*/}
          <div className="border p-4">
            <Image
              src={product7}
              alt="Nike Dunk Low Retro SE"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Promo Exclusion</p>
            <h3 className="font-semibold">Nike Dunk Low Retro SE</h3>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 9 695.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product8}
              alt="Nike Dri-FIT UV Hyverse"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Sustainable Materials</p>
            <h3 className="font-semibold">Nike Dri-FIT UV Hyverse</h3>
            <p className="text-gray-500 text-sm">Men's Short-Sleeve Graphic Fitness Top</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 2 495.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product9}
              alt="Nike Court Vision Low"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Court Vision Low</h3>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 5 695.00</p>
          </div>

            {/* Product Card 4 Group*/}
          <div className="border p-4">
            <Image
              src={product10}
              alt="Nike Dri-FIT Ready"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Dri-FIT Ready</h3>
            <p className="text-gray-500 text-sm">Men's Short-Sleeve Fitness Top</p>
            <p className="text-gray-500 text-sm">3 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 2 495.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product11}
              alt="Nike One Leak Protection: Period"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike One Leak Protection: Period</h3>
            <p className="text-gray-500 text-sm">Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 3 395.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product12}
              alt="Nike Air Force 1 LV8 3"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Air Force 1 LV8 3</h3>
            <p className="text-gray-500 text-sm">Older Kids' Shoe</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 7 495.00</p>
          </div>

           {/* Product Card 5 Group*/}
           <div className="border p-4">
            <Image
              src={product13}
              alt="Nike Blazer Low Platform"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Blazer Low Platform</h3>
            <p className="text-gray-500 text-sm">Women's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 8 195.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product14}
              alt="Nike Air Force 1 '07"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Air Force 1 '07</h3>
            <p className="text-gray-500 text-sm">Women's Shoes</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 8 195.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product15}
              alt="Nike Pro Dri-FIT"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Pro Dri-FIT</h3>
            <p className="text-gray-500 text-sm">Men's Tight-Fit Sleeveless Top</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 1 495.00</p>
          </div>

           {/* Product Card 6 Group*/}
           <div className="border p-4">
            <Image
              src={product16}
              alt="Nike Dunk Low Retro"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Dunk Low Retro</h3>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 8 695.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product17}
              alt="Nike Air Max SC"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Air Max SC</h3>
            <p className="text-gray-500 text-sm">Women's Shoes</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 5 995.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product18}
              alt="Nike Dri-FIT UV Miler"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Dri-FIT UV Miler</h3>
            <p className="text-gray-500 text-sm">Men's Short-Sleeve Running Top</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 1 695.00</p>
          </div>

           {/* Product Card 7 Group*/}
           <div className="border p-4">
            <Image
              src={product19}
              alt="Nike Air Max SYSTM"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Air Max SYSTM</h3>
            <p className="text-gray-500 text-sm">Older Kids' Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 6 495.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product20}
              alt="Nike Alate All U"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Alate All U</h3>
            <p className="text-gray-500 text-sm">Women's Light-Support Lightly Lined U-Neck Printed Sports Bra</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 2 195.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product21}
              alt="Nike Court Legacy Lift"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Court Legacy Lift</h3>
            <p className="text-gray-500 text-sm">Women's Shoes</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 7 495.00</p>
          </div>

           {/* Product Card 8 Group*/}
           <div className="border p-4">
            <Image
              src={product22}
              alt="Nike Swoosh"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Swoosh</h3>
            <p className="text-gray-500 text-sm">Women's Medium-support Padded Sports Bra Tank</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 3 095.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product23}
              alt="Nike SB Zoom Janoski OG+"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike SB Zoom Janoski OG+</h3>
            <p className="text-gray-500 text-sm">Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 8 595.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product24}
              alt="Nike Dri-FIT Run Division Rise 365"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Dri-FIT Run Division Rise 365</h3>
            <p className="text-gray-500 text-sm">Men's Running Tank</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 3 495.00</p>
          </div>

           {/* Product Card 9 Group*/}
           <div className="border p-4">
            <Image
              src={product25}
              alt="Nike Dri-FIT Challenger"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Dri-FIT Challenger</h3>
            <p className="text-gray-500 text-sm">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 2 495.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product26}
              alt="Jordan Series ES"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Jordan Series ES</h3>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 7 495.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product27}
              alt="Nike Outdoor Play"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Outdoor Play</h3>
            <p className="text-gray-500 text-sm">Older Kids' Oversized Woven Jacket</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 3 895.00</p>
          </div>

           {/* Product Card 10 Group*/}
           <div className="border p-4">
            <Image
              src={product28}
              alt="Nike Sportswear Trend"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Sportswear Trend</h3>
            <p className="text-gray-500 text-sm">Older Kids' (Girls') High-waisted Woven Shorts</p>
            <p className="text-gray-500 text-sm">2 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 2 495.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product29}
              alt="Nike Blazer Low '77 Jumbo"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike Blazer Low '77 Jumbo</h3>
            <p className="text-gray-500 text-sm">Women's Shoes</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 8 595.00</p>
          </div>

          <div className="border p-4">
            <Image
              src={product30}
              alt="Nike SB Force 58"
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-orange-500 text-sm">Just In</p>
            <h3 className="font-semibold">Nike SB Force 58</h3>
            <p className="text-gray-500 text-sm">Skate Shoe</p>
            <p className="text-gray-500 text-sm">1 Colour</p>
            <p className="font-bold mt-2">MRP : ₹ 5 995.00</p>
          </div>


        </div>
        <div className="container mx-auto mt-16 px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Related Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          Best Selling Products
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          Best Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          New Basketball Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          New Football Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          New Men's Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          New Running Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          Best Men's Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          New Jordan Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          Best Women's Shoes
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">
          Best Training & Gym
        </button>
      </div>
    </div>
      </main>
    </div>
  )
}

export default page