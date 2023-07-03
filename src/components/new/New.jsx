import React, { useEffect, useState } from 'react'
import c from "./New.module.css"
import { Link } from 'react-router-dom'
import { GrFormNext } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'

const New = () => {
  const [isNewJson, setIsNewJson] = useState([])
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const dispatchNewProducts = (data) => {
      const action = {
          type: "ADD_TO_CART",
          data: data
      }
      dispatch(action)
  }
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
           .then(response => response.json())
           .then(data => setIsNewJson(data.slice(130, 150)))
  }, [])
  return (
    <div className={c.new}>
        <div className={c.new__container}>
            <div className={c.new__wrapper}>
                <Link className={c.new__link}>Yangi</Link>
                <Link className={c.new__link__next}>
                    <GrFormNext className={c.new__link__icon}/>
                </Link>
            </div>
            
            <ul className={c.new__list}>
                {
                    isNewJson.map(({image, id, price, title}) => 
                        <li className={c.new__item} key={id}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${id}`}>
                                <img className={c.new__item__img} src={image} alt="" />
                                <div className={c.new__item__wrapper}>
                                    <p className={c.new__item__title}>{title}</p>
                                    <p className={c.new__item__title}>{price}</p>
                                </div>
                            </Link>
                            <div className={c.new__btn__wrapper}>
                                <button className={c.new__btn__cart} onClick={() => {
                                    dispatchNewProducts({id, image, title, price})
                                }}>
                                    <FiShoppingCart className={c.new__btn__cart__icon}/>
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

export default New