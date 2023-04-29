import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./SeasonSpring.module.css"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"

const SeasonSpring = () => {
    const elSeason = useRef()
    const [seasonSpringJson, setSeasonSpringJson] = useState([])
    const [seasonSpringSwiper, setSeasonSpringSwiper] = useState(0)

    const swiperRight = () => {
        if (seasonSpringSwiper < seasonSpringJson.length - 1) {
            setSeasonSpringSwiper(seasonSpringSwiper => seasonSpringSwiper + 1)
        }
        else{
            setSeasonSpringSwiper(0)
        }
    }

    const swiperLeft = () => {
        if (seasonSpringSwiper > 0) {
            setSeasonSpringSwiper(seasonSpringSwiper => seasonSpringSwiper - 1)
        }else{
            setSeasonSpringSwiper(seasonSpringJson.length - 1)
        }
    }

    useEffect(() => {
        elSeason.current.scrollLeft = seasonSpringSwiper * elSeason.current.offsetWidth
    }, [seasonSpringSwiper])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setSeasonSpringJson(data.slice(65, 75)))
    }, [])
  return (
    <div className={c.seasonSpring}>
        <div className={c.container}>
            <div className={c.seasonSpring__wrapper__info}>
                <div className={c.seasonSpring__container}>
                    <Link className={c.seasonSpring__heading}>Bahor mavsumi</Link>
                    <button className={c.seasonSpring__next__btn}>
                        <GrFormNext className={c.seasonSpring__next__icon}/>
                    </button>
                </div>
                <button className={c.seasonSpring__swiper__btn} onClick={swiperLeft} data-btn-type="left">
                    <GrFormPrevious className={c.seasonSpring__swiper__icon}/>
                </button>
                <ul className={c.seasonSpring__list} ref={elSeason}>
                    {
                        seasonSpringJson.map((seasonSprings, id) => 
                            <li className={c.seasonSpring__item} key={id}>
                                <Link style={{textDecoration: "none"}} to={`/pdp/${seasonSprings.id}`}>
                                    <img className={c.seasonSpring__img} src={seasonSprings.category.image} alt="" />
                                    <div className={c.seasonSpring__wrapper}>
                                        <p className={c.seasonSpring__title}>{seasonSprings.title}</p>
                                        <p className={c.seasonSpring__price}>{seasonSprings.price}</p>
                                    </div>
                                </Link>
                            <div className={c.springSeason__cart__btn__wrapper}>
                                <button className={c.springSeason__cart__btn}>
                                    <FiShoppingCart className={c.springSeason__cart__icon}/>
                                </button>
                            </div>
                            </li>
                        )
                    }
                </ul>
                <button className={c.seasonSpring__swiper__btn} onClick={swiperRight} data-btn-type="right">
                    <GrFormNext className={c.seasonSpring__swiper__icon}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SeasonSpring