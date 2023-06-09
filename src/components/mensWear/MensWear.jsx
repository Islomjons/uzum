import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./MensWear.module.css"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"

const MensWear = () => {
  const elMensWear = useRef()
  const [mensWearJson, setMensWearJson] = useState([])
  const [mensWearSwiper, setMensWearSwiper] = useState(0)

  const swipersLeft = () => {
      if (mensWearSwiper > 0) {
        setMensWearSwiper(mensWearSwiper => mensWearSwiper - 1)
      }else{
          setMensWearSwiper(mensWearJson.length - 1)
      }
  }

  const swipersRight = () => {
      if (mensWearSwiper < mensWearJson.length - 1) {
          setMensWearSwiper(mensWearSwiper => mensWearSwiper + 1)
      }else{
          setMensWearSwiper(0)
      }
  }

  useEffect(() => {
      elMensWear.current.scrollLeft = mensWearSwiper * elMensWear.current.offsetWidth
  }, [mensWearSwiper])

  const textDecorNone = {
    textDecoration: "none"
    }
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
       .then(response => response.json())
       .then(data => setMensWearJson(data.slice(85, 95)))
}, [])
  return (
    <div className={c.mensWear}>
        <div className={c.mensWear__wrapper}>
            <a className={c.mensWear__link} href="/">Erkaklar kiyimi</a>
            <button className={c.mensWear__next__btn}>
                <GrFormNext className={c.mensWear__next__icon}/>
            </button>
        </div>
        <button className={c.mensWear__carausel__btn} data-btn-type="left" onClick={swipersLeft}>
            <GrFormPrevious className={c.mensWear__carausel__icon}/>
        </button>
        <ul className={c.mensWear__list} ref={elMensWear}>
            {
                mensWearJson.map((mensWearss, id) => 
                  <li className={c.mensWear__item} key={id}>
                      <Link style={textDecorNone} to={`/pdp/${mensWearss.id}`}>
                          <img className={c.mensWear__img} src={mensWearss.category.image} alt="" />
                          <div className={c.mensWear__wrapper__info}>
                              <p className={c.mensWear__title}>{mensWearss.title}</p>
                              <p className={c.mensWear__price}>{mensWearss.price}</p>
                          </div>
                      </Link>
                      <div className={c.mensWear__cart__btn__wrapper}>
                          <button className={c.mensWear__cart__btn}>
                              <FiShoppingCart className={c.mensWear__cart__icon}/>
                          </button>
                      </div>
                  </li>
                )
            }
        </ul>
        <button className={c.mensWear__carausel__btn} data-btn-type="right" onClick={swipersRight}>
            <GrFormNext className={c.mensWear__carausel__icon}/>
        </button>
    </div>  
  )
}

export default MensWear