'use client'
import React, { useEffect, useState } from "react";
import styles from "./Tech.module.css"
import {  roboto } from "@/fonts";
import Image from "next/image";
const Technologies = () => {

    const [techDetails, setTechDetails] = useState<Array<any>>([]);

    useEffect(() => {

        const details =
            [
                {
                    icons: ['js.svg', 'ts.svg'],
                    title: 'Javascript & Typescript',
                    desciription: 'List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.',
                    level: 'Expert'
                },
                {
                    icons: ['ng.svg', 'react.svg'],
                    title: 'Angular and React',
                    desciription: 'List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.',
                    level: 'Expert'
                },
                {
                    icons: ['nodejs.svg'],
                    title: 'Node JS',
                    desciription: 'List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.',
                    level: 'Expert'
                },
                {
                    icons: ['nextjs.svg'],
                    title: 'Next JS',
                    desciription: 'List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.',
                    level: 'Expert'
                },

                {
                    icons: ['html.svg', 'css.svg'],
                    title: 'HTML/CSS',
                    desciription: 'List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.',
                    level: 'Expert'
                },
                {
                    icons: ['sass.svg', 'less.svg', 'tailwind.svg', 'bootstrap.svg'],
                    title: 'SCSS/LESS & Tailwind/bootstrap',
                    desciription: 'List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.',
                    level: 'Expert'
                },
            ]

        setTechDetails(details);

    }, [])

    return (

        <>
        <section className={`flex flex-col ${styles.techContainer}`}>
            <h1 className={`${roboto.className} ${styles.sectionTitle} text-[32px] flex justify-start`}>What I do</h1>

            <h4 className="mt-2 text-[16px] text-justify">
                I have more than 10 year of experience in building software for clients all over the world. Below is a quick overview of my main technical skill set and technologies
                I use.
            </h4>
            <div className={styles.techListContainer}>

                <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mb-24`}>
                    {
                        techDetails.map((item: any, index: Number) => (
                            <div key={item} className="flex-col"
                            >
                                <ul className={`flex flex-row gap-x-2`}>
                                    {item.icons.map((icon: any, ind: Number) => (
                                        <li>
                                            <Image
                                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src={`/techicons/${icon}`}
                                                alt={icon}
                                                width={24}
                                                height={24}
                                                priority
                                            />
                                        </li>

                                    ))}
                                </ul>
                                <h4 className="mt-2 font-bold text-[14px]">{item.title}</h4>
                                <p className={`${roboto.className} text-left text-[14px]`}>{item.desciription}</p>
                            </div>
                        ))}
                </div>

            </div>

        </section>

        <section className={`flex flex-col ${styles.techContainer}`}>
        <h1 className={`${roboto.className} ${styles.sectionTitle} text-[32px] flex justify-start`}>Featured Projects</h1>
        </section>


        <section className={`flex flex-col ${styles.techContainer}`}>
        <h1 className={`${roboto.className} ${styles.sectionTitle} text-[32px] flex justify-start`}>Latest blog posts</h1>
        </section>

        </>

        

    )
}

export default Technologies;