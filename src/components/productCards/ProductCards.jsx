import React, { useEffect, useState } from 'react'
import c from "./ProductCards.module.css"
import { GrFormNext } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'

const ProductCards = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const dispatchProducts = (data) => {
        const action = {
            type: "ADD_TO_CART",
            data: data
        }
        dispatch(action)
    }
    const [productCards, setProductCards] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductCards(data.slice(0, 5)))
    },[])
    console.log(productCards);
  return (
    <div className={c.productCards}>
        <div className={c.container}>
            <Link className={c.productCards__container}>
                <h3 className={c.productCards__header}>Hafta aksiyasi</h3>
                <GrFormNext className={c.productCards__icon}/>
            </Link>
            <ul className={c.productCards__list}>
                {
                    productCards.map(({id, image, title, price}) => 
                        <li className={c.productCards__item} key={id}>
                            <Link to={`/pdp/${id}`} style={{textDecoration: "none"}}>
                                <img className={c.productCards__img} src={image} alt="" />
                                <div className={c.productCards__info}>
                                    <p className={c.productCards__title}>{title}</p>
                                    <p className={c.productCards__price}>{price}</p>
                                </div>
                            </Link>
                            <div className={c.productCards__btn__wrapper}>
                                <button className={c.productCards__btn} onClick={() => {
                                    dispatchProducts({id, image, title, price})
                                }}>
                                    <FiShoppingCart className={c.productCards__icon}/>
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

export default ProductCards