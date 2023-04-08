import React, { useEffect, useState } from 'react'
import c from "./Rent.module.css"
import { GrFormNext } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from 'react-router-dom'

const Rent = () => {
  const [rentJson, setRentJson] = useState([])
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setRentJson(data.slice(30, 35)))
  }, [])
  return (
    <div className={c.rent}>
        <div className={c.container}>
            <div className={c.rent__container}>
                <Link style={{textDecoration: "none"}}>
                    <h3 className={c.rent__heading}>Ortiqcha to'lovlarsiz nasiya</h3>
                </Link>
                <GrFormNext className={c.rent__icon}/>
            </div>
            <ul className={c.rent__list}>
                {
                    rentJson.map((rentApi, id) => 
                       <li className={c.rent__item} key={id}>
                          <Link to={`/pdp/${rentApi.id}`} style={{textDecoration: "none"}}>
                              <img className={c.rent__img} src={rentApi.category.image} alt="" />
                              <div className={c.rent__wrapper}>
                                  <p className={c.rent__title}>{rentApi.title}</p>
                                  <p className={c.rent__price}>{rentApi.price}</p>
                              </div>
                          </Link>
                          <div className={c.rent__btn__wrapper}>
                              <button className={c.rent__cart__btn}>
                                  <FiShoppingCart className={c.rent__icon}/>
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

export default Rent