import React from 'react';
import Logo from './Logo';
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white fixed w-full z-40'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div className=''>
                    <img width={100} height={40} src={'https://www.logo.wine/a/logo/E-mart/E-mart-Logo.wine.svg'} />
                </div>
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                    <input type='text' placeholder='search product here...' className='w-full outline-none' value='' />
                    <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                        <CiSearch />
                    </div>
                </div>

                <div className='flex item-center gap-7'>
                    <div className='text-3xl cursor-pointer'>
                        <FaRegUserCircle />
                    </div>
                    <div className='text-3xl relative'>
                        <span><FaShoppingCart/></span>
                        <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                            <p className='text-xs'>0</p>
                        </div>
                    </div>

                    <div>
                        <button className='px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-700'>Login</button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
