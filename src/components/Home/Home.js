import React from 'react'
import styles from './home.module.css'
import pic from 'D:/MO/portfolio/src/pics/myPIC.png'
import { Link } from 'react-router-dom'
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return (
    <section id='home'>
      <div className={styles.Container}>
        <div className={styles.text}>
          <p>HI, I'M <span>MAHMOUD!</span> Front-End Developer</p>
          <p>I'm a passionate Front-End Developer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
          <div className={styles.myInfo}>
            <Link to='https://github.com/MahmoudMosaadlapip/resume/blob/dd1f3f1e4d4797686c788de9c090f98fbbb46685/Mahmoud%20cv.pdf'>Download CV</Link>
            <AnchorLink href="#contact">
                Contact Info
            </AnchorLink>
          </div>
          <div className={styles.myLinks}>
            <Link to='https://github.com/MahmoudMosaadlapip'><VscGithubInverted /></Link>
            <Link to='https://www.linkedin.com/in/mahmoud-mosaad-037aa3244/'><AiFillLinkedin /></Link>
          </div>
        </div>
        <div className={styles.myLogo}>
          <img src={pic} alt='mahmoud mosaad'/>
        </div>
        </div>
    </section>
  )
}

export default Home