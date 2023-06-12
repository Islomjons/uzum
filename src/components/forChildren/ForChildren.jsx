import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import  c from "./ForChildren.module.css"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"

const ForChildren = () => {
  const elForChildren = useRef()
  const [forChildrenJson, setForChildrenJson] = useState([])
  const [forChildrenSwiper, setForChildrenSwiper] = useState(0)

  const forChildrenSwipeLeft = () => {
      if (forChildrenSwiper > 0) {
        setForChildrenSwiper(forChildrenJson => forChildrenJson - 1)
      }else{
        setForChildrenSwiper(forChildrenJson.length - 1)
      }
  }
  
  const forChildrenSwipeRight = () => {
      if (forChildrenSwiper < forChildrenJson.length - 1) {
          setForChildrenSwiper(forChildrenJson => forChildrenJson + 1)
      }else{
          setForChildrenSwiper(0)
      }
  }

  useEffect(() => {
      elForChildren.current.scrollLeft = forChildrenSwiper * elForChildren.current.offsetWidth
  }, [forChildrenSwiper])
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setForChildrenJson(data.slice(115, 130)))
  }, [])
  return (
    <div className={c.forChildren}>
        <div className={c.forChildren__container}>
            <div className={c.forChildren__wrapper}>
                  <Link className={c.forChildren__heading}>Bolalar uchun</Link>
                  <button className={c.forChildren__next__btn}>
                      <GrFormNext className={c.forChildren__next__icon}/>
                  </button>
            </div>
            <button className={c.forChildren__swiper__btnss} data-btn-type="left" onClick={forChildrenSwipeLeft}>
                <GrFormPrevious className={c.forChildren__swiper__icons}/>
            </button>
            <ul className={c.forChildren__list} ref={elForChildren}>
                {
                    forChildrenJson.map((forChildrenApi, id) => 
                        <li className={c.forChildren__item} key={id}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${forChildrenApi.id}`}>
                                <img className={c.forChildren__img} src={forChildrenApi.category.image} alt="" />
                                <div className={c.forChildren__item__wrapper}>
                                    <p className={c.forChildren__title}>{forChildrenApi.title}</p>
                                    <p className={c.forChildren__price}>{forChildrenApi.price}</p>
                                </div>
                            </Link>
                            <div className={c.forChildren__cart__wrapper}>
                                <button className={c.forChildren__cart__btn}>
                                    <FiShoppingCart className={c.forChildren__cart__icon}/>
                                </button>
                            </div>
                        </li>
                    )
                }
            </ul>
            <button className={c.forChildren__swiper__btnss} data-btn-type="right" onClick={forChildrenSwipeRight}>
                <GrFormNext className={c.forChildren__swiper__icons}/>
            </button>
        </div>
    </div>
  )
}

export default ForChildren