import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import c from "./ForWomens.module.css"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"

const ForWomens = () => {
  const elForWomensWrapper = useRef()
  const [forWomensJson, setForWomensJson] = useState([])
  const [forWomennsSwiper, setForWomensSwiper] = useState(0)

  const swiperLeft = () => {
      if (forWomennsSwiper > 0) {
          setForWomensSwiper(forWomennsSwiper => forWomennsSwiper - 1)
      }else{
          setForWomensSwiper(forWomensJson.length - 1)
      }
  }
  
  const swiperRight = () => {
      if (forWomennsSwiper < forWomensJson.length - 1) {
          setForWomensSwiper(forWomennsSwiper => forWomennsSwiper + 1)
      }else{
          setForWomensSwiper(0)
      }
  }

  useEffect(() => {
    elForWomensWrapper.current.scrollLeft = forWomennsSwiper * elForWomensWrapper.current.offsetWidth
  }, [forWomennsSwiper])

  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setForWomensJson(data.slice(105, 115)))
  }, [])
  return (
    <div className={c.forwomens}>
        <div className={c.forwomens__container}>
            <Link className={c.forwomens__link}>Ayollar uchun</Link>
            <button className={c.forwomens__next__btn}>
                <GrFormNext className={c.forwomens__next__icon}/>
            </button>
        </div>
        <button className={c.forwomens__swiper__btn} data-btn-type="left" onClick={swiperLeft}>
            <GrFormPrevious className={c.forwomens__swiper__icon}/>
        </button>
        <ul className={c.forwomens__list} ref={elForWomensWrapper}>
            {
                forWomensJson.map((forWomensFetch, id) => 
                    <li className={c.forWomens__item} key={id}>
                        <Link style={{textDecoration: "none"}} to={`/pdp/${forWomensFetch.id}`}>
                            <img className={c.forwomens__img} src={forWomensFetch.category.image} alt="" />

                            <div className={c.forwomens__text__wrapper}>
                                <p className={c.forwomens__title}>{forWomensFetch.title}</p>
                                <p className={c.forwomens__price}>{forWomensFetch.price}</p>
                            </div>
                        </Link>
                        <div className={c.forwomens__cart__wrapper}>
                            <button className={c.forwomens__cart__btn}>
                                <FiShoppingCart className={c.forwomens__cart__icon}/>
                            </button>
                        </div>
                    </li>
                )
            }
        </ul>
        <button className={c.forwomens__swiper__btn} data-btn-type="right" onClick={swiperRight}>
            <GrFormNext className={c.forwomens__swiper__icon}/>
        </button>
    </div>
  )
}

export default ForWomens