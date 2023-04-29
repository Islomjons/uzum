import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./Phones.module.css"
import { FiShoppingCart } from "react-icons/fi"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

const Phones = () => {
    const underLineNone = {
        textDecoration: "none"
    }
  const [phonesJson, setPhonesJson] = useState([])
  const [phoneSwiper, setPhoneSwiper] = useState(0)
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setPhonesJson(data.slice(75, 85)))
  }, [])
  return (
    <div className={c.phones}>
        <div className={c.phones__next__wrapper}>
            <Link className={c.phones__heading}>Smartfonlar</Link>
            <button className={c.phones__next__btn}>
                <GrFormNext className={c.phones__next__icon}/>
            </button>
        </div>
            <button className={c.phones__swiper__btn} data-btn-type="left">
                <GrFormPrevious className={c.phones__swiper__icon}/>
            </button>
            <ul className={c.phones__list}>
                {
                    phonesJson.map((phoness, id) => 
                        <li className={c.phones__item} key={id}>
                            <Link style={underLineNone} to={`/pdp/${phoness.id}`}>
                                <img className={c.phones__img} src={phoness.category.image} alt="" />
                                <div className={c.phones__wrapper}>
                                    <p className={c.phones__title}>{phoness.title}</p>
                                    <p className={c.phones__price}>{phoness.price}</p>
                                </div>
                            </Link>
                            <div className={c.phones__cart__btn__wrapper}>
                                <button className={c.phones__cart__btn}>
                                    <FiShoppingCart className={c.phones__cart__icon}/>
                                </button>
                            </div>
                        </li>
                    )
                }
            </ul>
            <button className={c.phones__swiper__btn} data-btn-type="right">
                <GrFormNext className={c.phones__swiper__icon}/>
            </button>
    </div>
  )
}

export default Phones