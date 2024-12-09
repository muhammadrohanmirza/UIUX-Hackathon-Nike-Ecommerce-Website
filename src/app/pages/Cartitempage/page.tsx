import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import img1 from '../../../../public/images/Image (1).png'
import shose1 from '../../../../public/images/shose (1).png'
import Image from 'next/image';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bag Section */}
        <div className="md:col-span-2 lg:col-span-2">
          <div className="bg-slate-200 mb-5 p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-2">Free Delivery</div>
            <div className="text-xs text-gray-500 mb-4">
              Applies to orders of ₹ 14,000.00 or more.{' '}
              <span className="text-blue-500 cursor-pointer underline">View details</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Bag</h2>

            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-4 py-4 border-b">
              <Image
                src={img1}
                alt="Nike Dri-FIT"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                <div className="flex text-sm text-gray-600 mt-1">
                  <span>Size: L</span>
                  <span className="ml-4">Quantity: 1</span>
                </div>
              </div>
              <div className="text-right md:text-left pr-32 sm:pr-0">
                <p className="font-medium">MRP: ₹ 3,895.00</p>
                <div className="flex items-center justify-end gap-2 mt-2 pr-16 sm:pr-0">
                  <button className="text-gray-700 hover:text-red-600">
                    <FaRegHeart size={22} />
                  </button>
                  <button className="text-gray-700 hover:text-red-500">
                    <RiDeleteBinLine size={22} />
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center gap-4 py-4">
              <Image
                src={shose1}
                alt="Nike Air Max"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men's Shoes</p>
                <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                <div className="flex text-sm text-gray-600 mt-1">
                  <span>Size: 8</span>
                  <span className="ml-4">Quantity: 1</span>
                </div>
              </div>
              <div className="text-right md:text-left pr-24 sm:pr-0 ">
                <p className="font-medium">MRP: ₹ 16,995.00</p>
                <div className="flex items-center justify-end gap-2 mt-2 pr-20 sm:pr-0">
                  <button className="text-gray-700 hover:text-red-600">
                    <FaRegHeart size={22} />
                  </button>
                  <button className="text-gray-700 hover:text-red-500">
                    <RiDeleteBinLine size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹ 20,890.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total</span>
            <span>₹ 20,890.00</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
