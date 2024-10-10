'use client'
import React, { useState } from "react"
import styles from "./Header.module.css";
import { gupter, roboto, oswald } from "@/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Header = () => {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Resume', path: '/resume' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' }
    ];
    return (
        <div className={`mx-auto pl-12 pr-4 h-[70px] flex items-center justify-between ${styles.headerContainer}`}>
            <h1 className={`${styles.titleName} ${oswald.className}`}><span className={styles.firstName}>REJO</span> <span className={styles.lastName}>THOMAS</span></h1>
            <div className="hidden md:block">
                <ul className={`flex flex-row space-x-4 text-base ${roboto.className}`}>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className={`cursor-pointer ${pathname === item.path ? 'text-[#82bc93] font-bold' : 'text-black'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`flex items-center justify-center ${styles.chatButtonContainer}`}>
                <h1 className={`${roboto.className}`}>Talk to me</h1>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
                    className="focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-100 z-10">
                    <ul className={`flex flex-col space-y-2 p-4 text-base ${roboto.className}`}>
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`cursor-pointer ${pathname === item.path ? 'text-[#82bc93] font-bold' : 'text-black'
                                        }`}
                                    onClick={() => setIsOpen(false)} // Close menu on item click
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

           

        </div>
    )
}
export default Header
