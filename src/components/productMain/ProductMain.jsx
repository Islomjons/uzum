import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./ProductMain.module.css"
import { FiShoppingCart } from "react-icons/fi"

const ProductMain = () => {
    const [productMainJson, setProductMainJson] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductMainJson(data.slice(15, 20)))
    }, [])
  return (
    <div className={c.productMain}>
        <div className={c.container}>
            <ul className={c.productMain__list}>
                {
                    productMainJson.map((productMains, id) => 
                        <li key={id} className={c.productMain__item}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${productMains.id}`}>
                                <img className={c.productMain__img} src={productMains.category.image} alt="" />
                                <div className={c.productMain__wrapper}>
                                    <p className={c.productMain__title}>{productMains.title}</p>
                                    <p className={c.productMain__price}>{productMains.price}</p>
                                </div>
                            </Link>
                            <div className={c.productMain__btn__wrapper}>
                                <button className={c.productMain__btn}>
                                    <FiShoppingCart className={c.productMain__icon}/>
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

export default ProductMain