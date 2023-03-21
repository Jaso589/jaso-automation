import React, { useEffect, useState } from 'react'
import Style from '@/styles/SlideTestimonial.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const dataTestimonial = [
  {
    img:'/people/cliente1.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    img:'/people/cliente2.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    img:'/people/cliente1.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    img:'/people/cliente2.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }
]



export const Slide = () => {
  const [slideAux, setSlideAux] = useState(true)
  const [btnRight, setBtnRight] = useState(true)
  const [btnLeft, setBtnLeft] = useState(true)
  const [classMove, setClassMove] = useState(0)
  const [slideMin, setSlideMin] = useState(0)
  const [slideMax, setSlideMax] = useState(0)
  const [window, setWindow] = useState('')

  const [current, setCurrent] = useState(0)

  const length = dataTestimonial.length
  useEffect(() => {
    setWindow( window)

  }, [])
  
  const handleRigth = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1);
   
    if(slideMin < 0 || slideMax < 0){
      setBtnRight(true)
      setSlideMax(slideMax + 430)
      setSlideMin(slideMin + 30)
    }else{
      setBtnRight(false)
      setSlideMax(0)
      setSlideMin(0)
    }
    
  }
  const handleLeft= () =>{
    setCurrent(current === 0 ? length - 1 : current - 1);
    
    if(slideMin >= (-340*2) || slideMax >= (430 * 2)){
      setBtnLeft(true)
      setSlideMax(slideMax - 430)
      setSlideMin(slideMin - 30)  
    }else{
      setBtnLeft(false)
      setSlideMax(slideMax)
      setSlideMin(slideMin)
    }
  }
  console.log(current)
  return (
    <div className={Style.slide_container}>
      <div className='container'>
        <div className={Style.buttons}>
            <button onClick={handleLeft} className={btnLeft ? Style.button_active : Style.button_fail}><FontAwesomeIcon icon={faArrowLeft}/></button>
            <button onClick={handleRigth} className={btnRight ? Style.button_active : Style.button_fail}><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
        <div className={Style.slide}>
          {
            dataTestimonial.map(( slide, index) => (
              <div style={ 
                  slideAux ?
                 ( window.innerWidth > 768 ?
                  { transform: `translate(${0}px)`}
                  : { transform: `translate(${slideMax}px)`})
                  : null } 
                  className={ index == current ? Style.card_slide_active : Style.card_slide} key={index}>
                <div className={Style.img_card}>
                  <Image
                    src={slide.img}
                    fill
                  />
                </div>
                <div className={Style.text}>
                  <h4>{slide.name}</h4>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))
          }
         
        </div>
      </div>
    </div>
  )
}
