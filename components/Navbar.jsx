import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between item-center w-full h-full px-2 2xl:px-16'> 
           <Image
            src="/../public/assets/pfp.jpg"
            alt="/"
            width='100'
            height='200'
           />
        </div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b' >home</li>
            </Link>
          </ul>
    </div>
  )
}
export default Navbar;