import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import React from 'react';
import DownloadPDF from '../../components/DownloadPDF';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const emailAddress = 'evangelosniko@outlook.com';

  return (
<div>
      <Head>
        <title>Evangelos Empochon | Developer, Creator</title>
        <meta name="description" content="Evangelos' Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/me.JPG" />
      </Head>
      <main>
       <div className={styles.page}>
       <div className={styles.block}>
                <img src="/icons/me-headshot.jpeg" alt="" className={styles.headshot}/>

       <div className={styles.content}>
          <h1>Evangelos Empochon</h1>
          <p>Software Engineer</p>
          <div className={styles.gridContainer}>

            <div className={styles.gridItem}>
            <a href="https://www.elegantx.site/"> Need a website?
              <img src="/icons/www.png" alt="I build websites and app" class="logo"/>
              </a>
            </div>

            <div className={styles.gridItem}>
               <DownloadPDF link="/PersonalBranding-by-ev-codes.pdf" text="Build your brand" />

            </div>

            <div className={styles.gridItem}>
            <a href=""> Portfolio (In construction)
              <img src="/icons/portfolio.png" alt="Check out my portfolio"  className={styles.logo}/>
              </a>
            </div>

            <div className={styles.gridItem}>
            <a href=" https://substack.com/@evcodes">Blogs
              <img src="/icons/blog.png" alt="Check out my blog" className={styles.logo}/>
              </a>
            </div>

            <div className={styles.gridItem}>
            <a href="https://www.linkedin.com/in/evangelos-nikoloas-empochontsif/">LinkedIn
              <img src="/icons/linkedin.png" alt="Connect with me on Linked in" className={styles.logo}/>
              </a>
            </div>

            <div className={styles.gridItem}>
              <Link href={"https://www.youtube.com/channel/UCFvsN6uB84NMbiNYHi-TIcg"}>YouTube
              <img src="/icons/youtube.png" alt="Subscribe to my youtube channel" className={styles.logo}/>
              </Link>
            </div>

            <div className={styles.gridItem}>
            <a href="https://github.com/EvanNikaloasTheFirst">GitHub
              <img src="/icons/github.png" alt="Check out my github"className={styles.logo}/>
              </a>
            </div>

            <div className={styles.gridItem}>
            <a href="https://ev-codes.hashnode.dev/">Technical blogs
              <img src="/icons/code.png" alt="Check out my technical blogs" className={styles.logo}/>
              </a>
            </div>

            <div className={styles.gridItem}>
              <a href="https://twitter.com/evangelos_codes">Twitter (or X)
              <img src="/icons/x.png" alt="Follow me on twitter" className={styles.logo}/>
              </a>
            </div>

          </div>
</div>


        </div>

       </div>
      </main>
      </div>
  )
}
