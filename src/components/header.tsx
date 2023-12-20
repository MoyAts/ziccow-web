import React from 'react';
import Image from 'next/image'

const Header = () => {
  return (
    <header className='text-black font-Instrument absolute top-0 w-full m-auto '>
      <nav className='flex w-full justify-center'>
        <div className='flex py-5 px-8 justify-between items-center w-full max-w-[917px] bg-[#F3EFF5] rounded-b-[20px]'>
          <div className='flex gap-2 py-2'>
           <Image
           src= '/logo.svg'
           alt=''
           width={24}
           height={24} />
           <h1 className='font-Instrument font-medium'>Ziccow General Trading</h1>
          </div>
          <ul className='flex gap-5 font-Instrument font-medium'>
            <li className='px-[12px]'><a href="/">Home</a></li>
            <li className='px-[12px]'><a href="/about">Services</a></li>
            <li className='px-[12px]'><a href="/Properties">Properties</a></li>
            <li className='px-[12px]'><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;