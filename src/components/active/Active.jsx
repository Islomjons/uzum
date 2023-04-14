import React, { useEffect, useRef, useState } from 'react'
import c from "./Active.module.css"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

const Active = () => {
    const elSwiperCards = useRef()
    const [activeJson, setActiveJson] = useState([])
    const [swipeCards, setSwipeCards] = useState(0)
    const swipeRight = () => {
        if (swipeCards < activeJson.length - 1) {
            setSwipeCards(swipeCards => swipeCards + 1)
        }else{
            setSwipeCards(0)
        }
    }

    const swipeLeft = () => {
        if (swipeCards > 0) {
            setSwipeCards(swipeCards => swipeCards - 1)
        }else{
            setSwipeCards(activeJson.length - 1)
        }
    }

    useEffect(() => {
        elSwiperCards.current.scrollLeft = swipeCards * elSwiperCards.current.offsetWidth
    }, [swipeCards])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setActiveJson(data.slice(45, 55)))
    }, [])
  return (
    <div className={c.active}>
        <div className={c.container}>
            <div className={c.active__wrapper__info}>
                <div className={c.active__container}>
                    <h4 className={c.active__heading}>Faol dam olish</h4>
                    <button className={c.active__btn}>
                        <GrFormNext className={c.active__next__icon}/>
                    </button>
                </div>
                <button className={c.active__btn__swiper} data-btn-type="left" onClick={swipeLeft}>
                    <GrFormPrevious />
                </button>
                <ul className={c.active__list} ref={elSwiperCards}>
                    {
                        activeJson.map((activess, id) => 
                            <li className={c.active__item} key={id}>
                                <Link style={{textDecoration: "none"}} to={`/pdp/${activess.id}`}>
                                    <img className={c.active__img} src={activess.category.image} alt="" />
                                    <div className={c.active__wrapper}>
                                        <p className={c.active__title}>{activess.title}</p>
                                        <p className={c.active__price}>{activess.price}</p>
                                    </div>
                                </Link>
                                <div className={c.active__btn__wrapper}>
                                    <button className={c.active__cart__btn}>
                                        <FiShoppingCart className={c.active__cart__icon}/>
                                    </button>
                                </div>
                            </li>
                        )
                    }
                </ul>
                <button className={c.active__btn__swiper} data-btn-type="right" onClick={swipeRight}>
                    <GrFormNext />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Active