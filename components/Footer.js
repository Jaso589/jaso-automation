import React from 'react'
import Styles from '@/styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <div className='container'>
          <div className={Styles.footer_container}>
            <h2>Jaso Automation</h2>
            <div className={Styles.links_footer}>
              <div className={Styles.link_list}>
                <p>Company</p>
                <ul>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Mobile</li>
                </ul>
              </div>
              <div className={Styles.link_list}>
                <p>Contact</p>
                <ul>
                  <li>Help/FAQ</li>
                  <li>Press</li>
                  <li>Affilates</li>
                </ul>
              </div>
              <div className={Styles.link_list}>
                <p>More</p>
                <ul>
                  <li>Airlinefees</li>
                  <li>Airline</li>
                  <li>Low fare tips</li>
                </ul>
              </div>
            </div>
            <div className={Styles.footer_socials}>
              <a href=''>
                <FontAwesomeIcon style={{height:'35px'}} icon={faFacebook}/>
              </a>
              <a href=''>
                <FontAwesomeIcon style={{height:'35px'}} icon={faYoutube}/>
              </a>
              <a href=''>
                <FontAwesomeIcon style={{height:'35px'}} icon={faLinkedin}/>
              </a>
            </div>
        </div>
          
          
        <div className={Styles.copy_right}>
          <p>Jaso Automation © 2022 todos los derechos reservados </p>
        </div>
        </div>
      </footer>
    </>
  )
}
