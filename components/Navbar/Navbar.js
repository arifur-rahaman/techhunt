import Link from 'next/link';
import React from 'react';
import logo from '../../public/logo/thlogo4.png'
import { FaBars } from 'react-icons/fa'
import Image from 'next/image';
const Navbar = () => {
    const menuList = <>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/service"}>Services</Link></li>
        <li><Link href={"/about"}>About Us</Link></li>
        <li><Link href={"/contact"}>Contact Us</Link></li>
        <li><Link href={"/blog"}>Blog</Link></li>
        <li><Link href={"/team"}>Our Team</Link></li>
    </>
    return (
        <div className="m-auto navbar bg-black py-4 lg:w-[80rem]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars size={30} className='text-white font-bold' />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                    </label>
                    <ul tabIndex={0} className="bg-black text-white font-bold menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <a className="normal-case text-xl text-white font-bold"><Image width={130}  alt='tech-hunt' src={logo} /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-white font-bold menu menu-horizontal px-1">
                    {menuList}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="primaryBtn"><Link href={"/contact"}>Get Started</Link></button>
            </div>
        </div>
    );
};

export default Navbar;