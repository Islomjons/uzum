import React, { useState, useEffect } from 'react'
import c from "./HomeProductCards.module.css"
import { GrFormNext } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"

const HomeProductCards = () => {
    const [homeProductCardsJson, setHomeProductCardsJson] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setHomeProductCardsJson(data.slice(25, 30)))
    }, [])
  return (
    <div className={c.homeProductCards}>
        <div className={c.container}>
            <div className={c.homeProductCards__wrapper}>
                <h2 className={c.homeProductCards__heading}>Uydan chiqmasdan ro’zg’or</h2>
                <button className={c.homeProductCards__btn}>
                    <GrFormNext className={c.homeProductCards__icon}/>
                </button>
            </div>
            <ul className={c.homeProductCards__list}>
                {
                    homeProductCardsJson.map((homeProductCard, id) => 
                        <li className={c.homeProductCards__item} key={id}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${homeProductCard.id}`}>
                                <img className={c.homeProductCards__img} src={homeProductCard.category.image} alt="" />
                                <div className={c.homeProductCards__info}>
                                    <p className={c.homeProductCards__title}>{homeProductCard.title}</p>
                                    <p className={c.homeProductCard__price}>{homeProductCard.price}</p>
                                </div>
                            </Link>
                            <div className={c.homeProductCard__cart__btn__wrapper}>
                                <button className={c.homeProductCard__cart__btn}>
                                    <FiShoppingCart className={c.homeProductCard__icon}/>
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

export default HomeProductCards