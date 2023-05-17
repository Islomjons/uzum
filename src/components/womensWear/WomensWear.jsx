import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./WomensWear.module.css"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"

const WomensWear = () => {
  const [womensWearJson, setWomensWearJson] = useState([]) 
  
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
            <button className={c.womensWear__next__btn}>
                <GrFormNext className={c.womensWear__next__icon}/>
            </button>
        </div>
        <button className={c.womensWear__swiper__btn}>
            <GrFormPrevious className={c.womensWear__swiper__icon}/>
        </button>
        <ul className={c.womensWear__list}>
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
        <button className={c.womensWear__swiper__btn}>
            <GrFormNext className={c.womensWear__swiper__icon}/>
        </button>
    </div>
  )
}

export default WomensWear