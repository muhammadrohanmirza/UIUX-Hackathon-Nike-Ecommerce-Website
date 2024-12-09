import Image from 'next/image';
import { useState } from 'react';
import logo2 from '../../../../public/logo/logo2.png';
import { IoSearchOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="">
          <Link href="#" className="text-blue-600">
          <Image src={logo2} alt='logo2' className='w-[60px] h-[30px] sm:w-[120px] sm:h-[50px]'/>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:block space-x-6">
          <Link href={'pages/Allproductpage'} className="text-gray-700  ">New & Featured</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  ">Men</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  ">Women</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  ">Kids</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  ">Sale</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  ">SNKRS</Link>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center border-2  rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-32 md:w-48 lg:w-64 px-4 py-2 outline-none"
            />
            <IoSearchOutline className='cursor-pointer w-[25px] h-[25px]'/>
          </div>
          <button className="hidden md:block text-gray-700 hover:text-red-600">
          <FaRegHeart className='cursor-pointer w-[25px] h-[25px]' />
          </button>
          <Link href={'pages/Cartitempage'}>
          <button className=" hidden md:block text-gray-700 hover:text-black">
          <IoBagHandleOutline className='cursor-pointer w-[25px] h-[25px]' />
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 hover:text-blue-600"
          onClick={toggleMobileMenu}
        >
          <RiMenu3Line className='cursor-pointer w-[28px] h-[28px]'/>
        </button>
      </div>

      {/* Mobile Navigation (Initially Hidden, toggled via useState) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4 space-y-4">
          <Link href={'pages/Allproductpage'} className="text-gray-700  block">New & Featured</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  block">Men</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  block">Women</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  block">Kids</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  block">Sale</Link>
          <Link href={'pages/Allproductpage'} className="text-gray-700  block">SNKRS</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
