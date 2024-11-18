import React from 'react'
import styles from './projects.module.css'
import { Link } from 'react-router-dom'
import firstprojLOGO from 'D:/MO/portfolio/src/components/projects/assests/1st project.jpg'
import secondprojLOGO from 'D:/MO/portfolio/src/components/projects/assests/3rd project.jpg'
import thirdprojLOGO from 'D:/MO/portfolio/src/components/projects/assests/4th project.jpg'

const Projects = () => {
  return (
    <section id='projects'>
        <div className={styles.projectContainer}>
            <div className={styles.projectText}>
              <p>Here's some of <span>PROJECTS</span></p>
            </div>

            <div className={styles.myprojects}>
              <div className={styles.theProject}>
                <img src={firstprojLOGO} alt='Fasco Store'/>
                <h3>FASCO</h3>
                <Link to='https://github.com/MahmoudMosaadlapip/e-commerce-workshop.git'>Github Link</Link>
              </div>
              <div className={styles.theProject}>
                <img src={secondprojLOGO} alt='SHOP.CO'/>
                <h3>SHOP.CO</h3>
                <Link to='https://github.com/MahmoudMosaadlapip/SHOP.CO.git'>Github Link</Link>
              </div>
              <div className={styles.theProject}>
                <img src={thirdprojLOGO} alt='BR Architecture'/>
                <h3>BR Architects</h3>
                <Link to='https://github.com/MahmoudMosaadlapip/Landing-Page.git'>Github Link</Link>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Projects