'use client'
import Head from "next/head"
import styles from "./Portfolio.module.css"
import Tabs from "portfolio/app/components/tab/Tab"
import { inter } from "portfolio/app/styles/fonts"
export default function portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={`${inter.className}`}>Portfolio</h1>
          <p className={`${inter.className}`}>This is a short description of my professional portfolio.It showcases my skills, experiences, and projects.</p>

          <p className={`${inter.className}`}>Feel free to explore the tabs below for more details.</p>
          <button className={styles.hireButton}>Connect Me</button>
        </div>
      </header>
      <Tabs />
    </>

  )
}