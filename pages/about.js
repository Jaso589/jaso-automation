import Layout from '@/components/Layout'
import React from 'react'
import Style from '@/styles/About.module.css'
import Image from 'next/image'
import { SlideTestimonial } from '@/components/SlideTestimonial'
const About = () => {
  return (
    <Layout>
      <section className={Style.about}>
        <div className='container'>
          <h1>Quienes somos</h1>
        </div>
      </section>
      <div className={Style.services}>  
        <div className='container'>
          <h2>Nuestro servicios</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Adipiscing porta viverra et lectus et facilisi.
          </p>
          <div className={Style.services_content}>
            <article className={Style.column}>
              <h2>Automation</h2>
              <p>nuestro trabajo busca automatizar procesos, para ayudarte a optmizar recursos y mejorar la calidad de tu producto</p>
              <div>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Automatización e implementación de sistemas de riego
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Automatización de procesos industriales
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Domotica
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
              </div>
            </article>
            <article className={Style.column}>
              <h2>Mantenimientos</h2>
              <p>nuestro trabajo busca automatizar procesos, para ayudarte a optmizar recursos y mejorar la calidad de tu producto</p>
              <div>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Automatización e implementación de sistemas de riego
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Automatización de procesos industriales
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Domotica
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
              </div>
            </article>
            <article className={Style.column}>
              <h2>Consultoria</h2>
              <p>nuestro trabajo busca automatizar procesos, para ayudarte a optmizar recursos y mejorar la calidad de tu producto</p>
              <div>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Consultoria sobre procesos de automatización
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Capacitación de sistemas tecnologicos en la industria 4.0
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
                <label className={Style.accordion}>
                <input type='checkbox' name='checkbox-accordion'/>
                  <div className={Style.accordion__header}>
                    Domotica
                  </div>
                  <div className={Style.accordion__content}>
                    <h6>Lorem ipsum dolor sit amet,</h6>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </label>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className={Style.team}>
        <div className='container'>
          <h2>nuestro equipo</h2>
          <p>nuestro trabajo busca automatizar procesos, para ayudarte a optmizar recursos y mejorar la calidad de tu producto</p>
          <div className={Style.team_content}>
            <div className={Style.card_team}>
              <div className={Style.card_img}>
                <Image
                  src={'/people/person1.jpg'}
                  fill
                  alt='person1'
                />
              </div>
              <div className={Style.card_content}>
                <p>England power</p>
                <p>Ingeniero de proyectos</p>
              </div>
            </div>
            <div className={Style.card_team}>
              <div className={Style.card_img}>
                <Image
                  src={'/people/person2.jpg'}
                  fill
                  alt='person2'
                />
              </div>
              <div className={Style.card_content}>
                <p>England power</p>
                <p>Ingeniero de proyectos</p>
              </div>
            </div>
            <div className={Style.card_team}>
              <div className={Style.card_img}>
                <Image
                  src={'/people/person3.jpg'}
                  fill
                  alt='person3'
                />
              </div>
              <div className={Style.card_content}>
                <p>England power</p>
                <p>Ingeniero de proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.testimonial}>
        <div className='container'>
          <div className={Style.testimonial_content}>
            <h2>Nuestros Clientes</h2>
            <p>nuestro trabajo busca automatizar procesos, para ayudarte a optmizar recursos y mejorar la calidad de tu producto</p>
          </div>
          <SlideTestimonial/>
        </div>
      </div>
    </Layout>
  )
}

export default About