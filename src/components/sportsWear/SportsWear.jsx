import React, { useEffect, useState } from 'react'
import c from "./SportsWear.module.css"
import { GrFormNext } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"

const SportsWear = () => {
  const [sportsWearJson, setSportsWearJson] = useState([])
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setSportsWearJson(data.slice(40, 45)))
  }, [])
  return (
    <div className={c.sportsWear}>
        <div className={c.container}>
            <div className={c.sportsWear__container}>
                <h4 className={c.sportsWear__heading}>Sport kiyimi</h4>
                <button className={c.sportsWear__btn}>
                    <GrFormNext className={c.sportsWear__next__icon}/>
                </button>
            </div>
            <ul className={c.sportsWear__list}>
                {
                    sportsWearJson.map((sportsWearss, id) => 
                        <li className={c.sportsWear__item} key={id}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${sportsWearss.id}`}>
                                  <img className={c.sportsWear__img} src={sportsWearss.category.image} alt="" />
                                  <div className={c.sportsWear__wrapper}>
                                      <p className={c.sportsWear__title}>{sportsWearss.title}</p>
                                      <p className={c.sportsWear__price}>{sportsWearss.price}</p>
                                  </div>
                            </Link>
                            <div className={c.sportsWear__btn__wrapper}>
                                <button className={c.sportsWear__cart__btn}>
                                    <FiShoppingCart className={c.sportsWear__cart__icon}/>
                                </button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default SportsWear