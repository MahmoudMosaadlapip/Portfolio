import React from 'react'
import styles from './service.module.css'
import { AiOutlineDesktop } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlinePartition } from "react-icons/ai";

const Service = () => {
return (
    <section id='services'>
        <div className={styles.sectionContainer}>
        <div className={styles.textServices}>
            <span>MY SERVICE</span>
            <p>With 1 year of experience in web development, I help businesses build powerful, user-friendly websites and applications. I take pride in delivering high-quality, responsive, and performance-optimized digital solutions tailored to your needs.</p>
        </div>
        <div className={styles.serviceLogo}>
            <div className={styles.logoContainer}>
                <AiOutlineDesktop />
                <h3>Custom Websites</h3>
                <p>Build a website tailored to your brand and business goals</p>
            </div>
            <div className={styles.logoContainer}>
                <AiOutlineFullscreen />
                <h3>Responsive Design</h3>
                <p>Websites that look great on any device—desktop, tablet, or mobile</p>
            </div>
            <div className={styles.logoContainer}>
                <AiOutlinePartition />
                <h3>Website Maintenance</h3>
                <p>Ongoing support to keep your site updated and running smoothly</p>
            </div>
        </div>
        </div> 
    </section>
  )
}

export default Service