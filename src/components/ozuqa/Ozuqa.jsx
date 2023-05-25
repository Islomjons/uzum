import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"
import c from "./Ozuqa.module.css"

const Ozuqa = () => {
  const elOzuqaWrapper = useRef()
  const [ozuqaJson, setOzuqaJson] = useState([])
  const [ozuqaSwiper, setOzuqaSwiper] = useState(0)

  const swiperLeft = () => {
    if (ozuqaSwiper > 0) {
      setOzuqaSwiper(ozuqaJson => ozuqaJson - 1)
    }else{
      setOzuqaSwiper(ozuqaJson.length - 1)
    }
  }

  const swiperRight = () => {
    if (ozuqaSwiper < ozuqaJson.length - 1) {
      setOzuqaSwiper(ozuqaSwiper => ozuqaSwiper + 1)
    }else{
      setOzuqaSwiper(0)
    }
  }

  useEffect(() => {
    elOzuqaWrapper.current.scrollLeft = ozuqaSwiper * elOzuqaWrapper.current.offsetWidth
  }, [ozuqaSwiper])

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => setOzuqaJson(data.slice(105, 115)))
  }, [])
  return (
    <div className={c.ozuqa}>
        <div className={c.ozuqa__container}>
           <div className={c.ozuqa__wrapper}>
              <Link className={c.ozuqa__heading}>Ma'naviy ozuqa</Link>
                <button className={c.ozuqa__next__btn}>
                  <GrFormNext className={c.ozuqa__next__icon}/>
                </button>
           </div>
           <button className={c.ozuqa__swiper__btn} data-btn-type="left" onClick={swiperLeft}>
              <GrFormPrevious className={c.ozuqa__swiper__icon}/>
           </button>
           <ul className={c.ozuqa__list} ref={elOzuqaWrapper}>
             {
                  ozuqaJson.map((ozuqaApi, id) => 
                     <li className={c.ozuqa__item} key={id}>
                          <Link style={{textDecoration: "none"}} to={`/pdp/${ozuqaApi.id}`}>
                              <img className={c.ozuqa__img} src={ozuqaApi.category.image} alt="" />
                              <div className={c.ozuqa__wrapper__info}>
                                  <p className={c.ozuqa__title}>{ozuqaApi.title}</p>
                                  <p className={c.ozuqa__price}>{ozuqaApi.price}</p>
                              </div>
                          </Link>
                          <div className={c.ozuqa__cart__btn__wrapper}>
                              <button className={c.ozuqa__cart__btn}>
                                  <FiShoppingCart className={c.ozuqa__cart__icon}/>
                              </button>
                          </div>
                     </li>  
                  )
             }
           </ul>
           <button className={c.ozuqa__swiper__btn} data-btn-type="right" onClick={swiperRight}>
              <GrFormNext className={c.ozuqa__swiper__icon}/>
           </button>
        </div>
    </div>
  )
}

export default Ozuqa