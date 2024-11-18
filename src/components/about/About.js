import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <section id='about'>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutmeText}>
                <span>ABOUT ME</span>
            </div>
            <div className={styles.aboutmeText2}>
                <p>Hi, I'm <span>Mahmoud Mosaad</span>, a passionate and creative web developer based in <span>EGYPT</span>. I specialize in building fast, responsive, and user-friendly websites and web applications. My goal is to create digital experiences that delight users while solving real-world problems. I graduated from faculty of engineering but I Focused on web development, software engineering, and user experience design.</p>
            </div>
            
            <div className={styles.seprator}></div>
            <div className={styles.logoContainer}>
            <div className={styles.aboutmeText}>
                <span>SKILLS</span>
            </div>
            <div className={styles.firstLogoContainer}>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/html.png" alt=''/>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/css.png" alt=''/>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/boostrap.png" alt=''/>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/js.png" alt=''/>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/sql.png" alt=''/>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/tailwind.png" alt=''/>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/type.png" alt=''/>
              <img src="https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/icons/git.png" alt=''/>
            <div/>
              </div>
            </div>    
        </div>
            
    </section>
  )
}

export default About


