import React from "react";
import styles from "./Banner.module.css"
import { inter, roboto } from "@/fonts";
import Image from "next/image";
const Banner = () => {

  return (

    <section className={`${styles.bannerContainer} flex flex-col md:flex-row justify-around items-center p-4`}>
      {/* Left Side (Social Media + Text) */}
      <div className="flex flex-col md:w-3/5 w-full text-center md:text-left items-start">
        {/* Social Media Icons */}
        <ul className={`flex flex-row gap-x-4`}>
          <li>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/linkedin.svg"
              alt="Linkedin"
              width={24}
              height={24}
              priority
            />
          </li>
          <li>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/git.svg"
              alt="Git"
              width={24}
              height={24}
              priority
            />
          </li>
          <li>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/sof.svg"
              alt="Stack overflow"
              width={24}
              height={20}
              priority
            />
          </li>
          <li>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/instagram.svg"
              alt="Instagram"
              width={24}
              height={20}
              priority
            />
          </li>
          <li>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/facebook.svg"
              alt="Facebook"
              width={24}
              height={20}
              priority
            />
          </li>
        </ul>

        {/* Text Section */}
        <section className="mt-5">
          <span className="flex items-center justify-start md:justify-start">
            <h1 className={`${inter.className} text-[28px]`}>Hey there</h1>
            <Image
              src="/hi.png"
              alt="Hi"
              width={48}
              height={48}
            />
          </span>
          <h1 className={`${inter.className} text-[28px] flex justify-start`}>It's Rejo Thomas</h1>
          <h4 className="mt-2 text-[14px] text-justify">
            Welcome to my creative corner! I'm Rejo Thomas, a passionate Front end developer with more than 10 years of experience crafting digital experiences that are both visually stunning and user-friendly.
          </h4>
        </section>
        <section className="mt-10 flex item-left justify-left w-full space-x-4">
          <div className={`flex items-center justify-center text-[14px] ${styles.chatButtonContainer}`}>
            <h3 className={`${roboto.className}`}>Resume</h3>
          </div>
          <div className={`flex items-center justify-center text-[14px] ${styles.chatButtonContainer}`}>
            <h1 className={`${roboto.className}`}>My portfolio</h1>
          </div>
        </section>
      </div>

      {/* Right Side (Profile Picture) */}
      <div className="mt-8 md:mt-0 md:w-2/5 w-full flex justify-center md:justify-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="https://raw.githubusercontent.com/rejothms/pcimages/main/profile_portfolio.png"
          alt="profile picture"
          width={280}
          height={60}
          priority
        />
      </div>
    </section>


  )
}

export default Banner;