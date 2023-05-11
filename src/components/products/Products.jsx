import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./Products.module.css"
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const dispatchProductsOnCarts = (data) => {
        const action = {
            type: "ADD_TO_CART",
            data: data
        }
        dispatch(action)
  }
  const [productsJson, setProductsJson] = useState([])
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => setProductsJson(data.slice(5, 10)))
  }, [])
  return (
    <div className={c.products}>
        <div className={c.container}>
            <ul className={c.products__list}>
              {
                  productsJson.map(({id, image, title, price}) => 
                      <li key={id} className={c.products__item}>
                          <Link to={`/pdp/${id}`} style={{textDecoration: "none"}}>
                                <img className={c.products__img} src={image} alt="" />
                                <div className={c.products__wrapper}>
                                    <p className={c.products__title}>{title}</p>
                                    <p className={c.products__price}>{price}</p>
                                </div>
                          </Link>
                          <div className={c.products__btn__wrapper}>
                                <button className={c.products__btn} onClick={() => {
                                    dispatchProductsOnCarts({id, image, title, price})
                                }}>
                                    <FiShoppingCart className={c.products__icon}/>
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

export default Products