import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./WomensWear.module.css"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"

const WomensWear = () => {
    const elWomentsWearWrapper = useRef()
  const [womensWearJson, setWomensWearJson] = useState([]) 
  const [swiperBtns, setSwiperBtns] = useState(0)

  const swiperBtnLeft = () => {
      if (swiperBtns > 0) {
          setSwiperBtns(swiperBtns => swiperBtns - 1)
      }else {
          setSwiperBtns(womensWearJson.length - 1)
      }
  }

  const swiperBtnRight = () => {
      if (swiperBtns < womensWearJson.length - 1) {
          setSwiperBtns(swiperBtns => swiperBtns + 1)
      }else{
          setSwiperBtns(0)
      }
  }

  useEffect(() => {
    elWomentsWearWrapper.current.scrollLeft = swiperBtns * elWomentsWearWrapper.current.offsetWidth
  }, [swiperBtns])
  
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setWomensWearJson(data.slice(95, 105)))
  }, [])
  const underLine = {
    textDecoration: "none"
  }
  return (
    <div className={c.womensWear}>
        <div className={c.womensWear__wrapper}>
            <Link className={c.womensWear__link} style={underLine}>Ayollar kiyimi</Link>
            <button className={c.womensWear__next__btn} onClick={swiperBtnLeft}>
                <GrFormNext className={c.womensWear__next__icon}/>
            </button>
        </div>
        <button className={c.womensWear__swiper__btn} data-btn-type="left">
            <GrFormPrevious className={c.womensWear__swiper__icon}/>
        </button>
        <ul className={c.womensWear__list} ref={elWomentsWearWrapper}>
            {
                womensWearJson.map((womensWears, id) => 
                    <li className={c.womensWear__item} key={id}>
                        <Link to={`/pdp/${womensWears.id}`} style={underLine}>
                            <img className={c.womensWear__img} src={womensWears.category.image} alt="" />

                            <div className={c.womensWear__info}>
                                <p className={c.womensWear__title}>{womensWears.title}</p>
                                <p className={c.womensWear__price}>{womensWears.price}</p>
                            </div>
                        </Link>
                        <div className={c.womensWear__cart__btn__wrapper}>
                             <button className={c.womensWear__cart__btn}>
                                  <FiShoppingCart className={c.womensWear__cart__icon}/>
                             </button>
                        </div>
                    </li>
                )
            }
        </ul>
        <button className={c.womensWear__swiper__btn} data-btn-type="right" onClick={swiperBtnRight}>
            <GrFormNext className={c.womensWear__swiper__icon}/>
        </button>
    </div>
  )
}

export default WomensWear