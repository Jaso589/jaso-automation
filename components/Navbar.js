import React, { useState } from 'react'
import { ActiveLink } from './ActiveLink'
import Styles from '@/styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const navLinks = [
    {
        page:'Inicio',
        href:'/'
    },
    {
        page:'Nosotros',
        href:'/about'
    },
    {
        page:'Blog',
        href:'/blog'
    },
    {
        page:'Contacto',
        href:'/contact'
    }
]

export const Navbar = () => {
  const [btnMenu, setbtnMenu] = useState(false)

  const handleMenu = () =>{
    setbtnMenu(() => !btnMenu)
  }
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.container}>
          <div className={Styles.brand}>
            <p>Jaso Automation</p>
          </div>
          <nav className={btnMenu ? Styles.navbar_active : Styles.navbar_hide}>
            <div className={Styles.nav}>
              {
                navLinks.map(({href, page})=>(
                  <ActiveLink href={href} text={page} key={page}/>
                ))
              }
            </div>
            <div className={Styles.socials_header}>
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
          </nav>
          
          <button className={Styles.btn_menu} onClick={handleMenu}><FontAwesomeIcon icon={faBars}/></button>
        </div>
        
        
      </header>
    </>
  )
}
