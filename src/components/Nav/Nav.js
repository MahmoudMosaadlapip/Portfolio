import React, { useState } from 'react'
import styles from './nav.module.css'
import logo from 'D:/MO/portfolio/src/pics/1000_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {

    const [navState,setnavstate] = useState(false)

return (
    <nav>
        <div className={styles.NavContainer}>
            <div className={styles.NavLogo}>
            <AnchorLink href="#home">
            <img src={logo} alt='logo'></img>
            </AnchorLink>
            </div>
            <div className={`${styles.navLinks} ${ navState && styles.hide}`}>
            <AnchorLink href="#services">
                SERVICES
            </AnchorLink>
            <AnchorLink href="#about">
                ABOUT
            </AnchorLink>
            <AnchorLink href="#projects"> 
                PROJECTS
            </AnchorLink>
            <AnchorLink href="#contact">
                CONTACT
            </AnchorLink>
            </div>

            
        </div>
        <div className={styles.navToggler} onClick={()=>setnavstate(!navState)}>
            <GiHamburgerMenu />
        </div>


    </nav>
)
}

export default Nav