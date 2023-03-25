import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./ProductBottom.module.css"
import { FiShoppingCart } from "react-icons/fi"

const ProductBottom = () => {
    const [productBottomJson, setProductBottomJson] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductBottomJson(data.slice(10, 15)))
    }, [])
  return (
    <div className={c.productBottom}>
        <div className={c.container}>
            <ul className={c.poductBottom__list}>
                {
                    productBottomJson.map((productBottom, id) => 
                        <li key={id} className={c.productBottom__item}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${id}`}>
                                <img className={c.productBottom__img} src={productBottom.category.image} alt="" />
                                <div className={c.productBottom__wrapper}>
                                    <p className={c.productBottom__title}>{productBottom.title}</p>
                                    <p className={c.productBottom__price}>{productBottom.price}</p>
                                </div>
                            </Link>
                            <div className={c.productBottom__btn__wrapper}>
                                <button className={c.productBottom__btn}>
                                    <FiShoppingCart className={c.productBottom__icon}/>
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

export default ProductBottom