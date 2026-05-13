'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { GrHomeRounded } from 'react-icons/gr';
import { ImStatsDots } from 'react-icons/im';


const Navbar = () => {
    const pathName= usePathname()
    const links=<>
    <li><Link className={`btn ${pathName==='/'? 'btn-primary':''} `} href={'/'}><GrHomeRounded></GrHomeRounded><span>Home</span></Link></li>
    <li><Link className={`btn ${pathName==='/timeline'? 'btn-primary':''} `} href={'/timeline'}><FaRegClock></FaRegClock><span>Timeline</span></Link></li>
    <li><Link className={`btn ${pathName==='/stats'? 'btn-primary':''} `} href={'/stats'}><ImStatsDots></ImStatsDots><span>Stats</span></Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm sm:max-w-[95%] rounded-lg mx-auto">
  <div className="navbar-start">

    <a className="btn btn-ghost text-xl">
        <Image src='/logo.png' alt='logo' width={141} height={31}></Image>
    </a>
  </div>
  <div className="navbar-end ">
    <ul className="hidden lg:flex menu menu-horizontal px-1 gap-2">
      {links}
    </ul>
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
            {links}
      </ul>
    </div>
  </div>

</div>
        </div>
    );
};

export default Navbar;