import React from 'react'
import styles from './contact.module.css'
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
return (
    <section id='contact'>
        <div className={styles.contactContainer}>
            <div className={styles.contactText}>
                <span>CONTACT ME</span>
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.email}>
                <AiOutlineMail />
                <Link to='mahmoud.mossad45@gmail.com'>Mahmoud.mossad45@gmail.com</Link>
                </div>
                <div className={styles.linkedin}>
                <AiFillLinkedin />
                <Link to='https://www.linkedin.com/in/mahmoud-mosaad-037aa3244/'>LinkedIn</Link>
                </div>
                <div className={styles.github}>
                <VscGithubInverted />
                <Link to='https://github.com/MahmoudMosaadlapip'>GitHub</Link>
                </div>
            </div>
        </div>
    </section>
)
}

export default Contact