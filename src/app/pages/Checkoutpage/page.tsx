import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBox } from "react-icons/fa";
import img1 from '../../../../public/images/Image (1).png'
import shose1 from '../../../../public/images/shose (1).png'
const Checkout = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Left Column - Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">How would you like to get your order?</h2>
          <p className='text-gray-400'>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <Link href={'/'} className='underline'>Learn More</Link></p>
          <div className=" flex mb-4 border-solid border-black rounded-xl border-2 h-[82px] w-[440px] gap-[24px] items-center pl-10 mt-5">
          <FaBox />
            Deliver It
          </div>
          <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="col-span-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="col-span-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="col-span-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Locality"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                <option>Select State/Province</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Punjab</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <input type="checkbox" id="copyAddress" className="mr-2" />
            <label htmlFor="copyAddress">Save this address to my profile</label>
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="copyAddress" className="mr-2" />
            <label htmlFor="copyAddress">Make this my preferred address</label>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-4">What's your contact information?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className='text-gray-400'>A confirmation email will be sent after checkout.</p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
              type="tel"
              placeholder="Phone Number"
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className='text-gray-400'>A carrier might contact you to confirm delivery.</p>

          <h3 className="text-lg font-semibold mt-6 mb-4">What's your PAN?</h3>
          <input
            type="text"
            placeholder="PAN"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          
          />
          <p className='text-gray-400'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="savePAN" className="mr-2" />
            <label htmlFor="savePAN" className='text-gray-400'>Save PAN details to Nike Profile</label>
          </div>
          <div className="mt-10 flex items-center">
            <input type="checkbox" id="savePAN" className="mr-2" />
            <label htmlFor="savePAN" className='text-gray-400'>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</label>
          </div>
          <div className="mt-6">
            <button className="w-full h-[50px] bg-gray-400 text-white py-2 rounded-3xl">Continue</button>
          </div>
          <div className='mt-10'>
            <div className=' text-xl h-[80px] border-t border-gray-400 '>Delivery</div>
            <div className=' text-xl h-[80px] border-t border-gray-400 text-gray-400'>Shipping</div>
            <div className=' text-xl h-[80px] border-t border-gray-400 text-gray-400'>Billing</div>
            <div className=' text-xl h-[80px] border-t border-gray-400 text-gray-400'>Payment</div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="border-b pb-4 mb-4">
            <p>Order Subtotal</p>
            <p className="text-right font-semibold">₹ 20,890.00</p>
          </div>
          <div className="border-b pb-4 mb-4">
            <p>Delivery Charges</p>
            <p className="text-right font-semibold">₹10.00</p>
          </div>
          <div className="text-lg font-semibold mb-4">
            <p>Total</p>
            <p className="text-right">₹ 20,890.00</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={img1}
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-sm text-gray-500">Size: L</p>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src={shose1}
              alt="Nike Air Max 97 SE"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-medium">Nike Air Max 97 SE</p>
              <p className="text-sm text-gray-500">Size: 8</p>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
