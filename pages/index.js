import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faMessage, faRobot } from '@fortawesome/free-solid-svg-icons'
import { SlideTestimonial } from '@/components/SlideTestimonial'
import { VideoIframe } from '@/components/VideoIframe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <section className={styles.home}>
          <div className='container'>
            <div className={styles.content_home}>
              <h1>Bienvenidos a bot automation</h1>
              <h2>Hacemos que la tecnología trabaje para ti</h2>
              <button>Contactar</button>
            </div>
          </div>
        </section>
        <section className={styles.news_home}>
          <div className='container'>
            <div className={styles.content}>
              <h3>usamos la automatizacion para optmizar y mejorar tu produccion</h3>
              <div className={styles.news_content}>
                <div className={styles.post_iframe}>
                  <VideoIframe/>
                </div>
                <div className={styles.post}>
                  <div className={styles.img_post}>
                  <Image/>
                  </div>
                  <div className={styles.text}>
                    <h4>Riego automatizado</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, alias.</p>
                    <Link href={''}>Ver post</Link>
                  </div>
                </div>
                <div className={styles.post}>
                  <div className={styles.img_post}>
                      <Image/>
                  </div>
                    <div className={styles.text}>
                      <h4>Riego automatizado</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, alias.</p>
                      <Link href={''}>Ver post</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.services_home}>
          <div className='container'>
            <div className={styles.content}>
              <h2>Nuestros servicios</h2>
              <h3>cuenta con nuestros servicios para automatizar y despegar tu negocio</h3>
              <div className={styles.services_content}>
                <div className={styles.service_card}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faRobot}/>
                  </div>
                  <h3>Automatización</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Urna maecenas a velit integer varius malesuada.</p>
                </div>
                <div className={styles.service_card}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faGear}/>
                  </div>
                  <h3>Mantenimientos</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Urna maecenas a velit integer varius malesuada.</p>
                </div>
                <div className={styles.service_card}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMessage}/>
                  </div>
                  <h3>Consultorias</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Urna maecenas a velit integer varius malesuada.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.work_home}>
          <div className='container'>
            <div className={styles.content}>
              <h2>Nuestros TRabajos</h2>
              <h3>la tecnología es parte del desarrollo</h3>
              <div className={styles.work_content}>
                <div className={styles.card_work}>
                  <div className={styles.work_img}>
                    <Image
                      src={'/projects/riego_automatizado.jpg'}
                      fill
                      alt='project1'
                    />
                  </div>
                  <div className={styles.work_text}>
                    <h3>AUTOMATIZACIÓN DE RIEGO TECNIFICADO</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Enim mi euismod mi et amet sed eleifend duis. Malesuada egestas ac tristique arcu.
                    Lorem ipsum dolor sit amet consectetur. Enim mi euismod mi et amet sed eleifend duis. Malesuada egestas ac tristique arcu.Lorem ipsum dolor sit amet consectetur. Enim mi euismod mi et amet sed eleifend duis. Malesuada egestas ac tristique arcu.  
                    </p>
                    <button className={styles.btn_project}>Leer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.testimonial_home}>
          <div className='container'>
            <div className={styles.content_testimonial}>
                <h2>Nuestros Clientes</h2>
                <h3>cuenta con nuestros servicios para automatizar y despegar tu negocio</h3>
            </div>
            <SlideTestimonial/>
          </div>
        </section>
        <section className={styles.slogan_contact}>
          <div className='container'>
            <div className={styles.slogan}>
              <h3>Trabaje con expertos</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Non ullamcorper nunc pellentesque et lorem. Nullam sapien adipiscing fames vulputate faucibus. Velit enim non vel at tristique magna nunc est augue.</p>
              <div className={styles.buttons}>
                <button>Contactar</button>
                <button>Blog</button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
