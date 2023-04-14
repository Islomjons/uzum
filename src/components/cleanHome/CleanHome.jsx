import { useEffect, useRef, useState } from 'react'
import c from "./CleanHome.module.css"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

const CleanHome = () => {
    const elCleanHome = useRef()
    const [cleanHomeJson, setCleanHomeJson] = useState([])
    const [cleanHomeSwiper, setCleanHomeSwiper] = useState(0)
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setCleanHomeJson(data.slice(55, 65)))
    }, [])
    const swipeRight = ( ) => {
        if (cleanHomeSwiper < cleanHomeJson.length - 1) {
            setCleanHomeSwiper(cleanHomeSwiper => cleanHomeSwiper + 1)
        }
        else{
            setCleanHomeSwiper(0)
        }
    }

    const swipeLeft = () => {
        if (cleanHomeSwiper > 0) {
            setCleanHomeSwiper(cleanHomeSwiper => cleanHomeSwiper - 1)
        }
        else{
            setCleanHomeSwiper(cleanHomeJson.length - 1)
        }
    }

    useEffect(() => {
        elCleanHome.current.scrollLeft = cleanHomeSwiper * elCleanHome.current.offsetWidth
    }, [cleanHomeSwiper])
  return (
    <div className={c.cleanHome}>
        <div className={c.container}>
            <div className={c.cleanHome__info__wrapper}>
                <div className={c.cleanHome__container}>
                    <Link className={c.cleanHome__link}>Toza uy - toza ko'ngil</Link>
                    <button className={c.cleanHome__next__btn}>
                        <GrFormNext className={c.cleanHome__next__icon}/>
                    </button>
                </div>
                <button className={c.cleanHome__swiper__btn} data-btn-type="left" onClick={swipeLeft}>
                    <GrFormPrevious className={c.cleanHome__swiper__icon}/>
                </button>
                <ul className={c.cleanHome__list} ref={elCleanHome}>
                    {
                        cleanHomeJson.map((cleanHomes, id) => 
                            <li className={c.cleanHome__item} key={id}>
                                <Link style={{textDecoration: "none"}} to={`/pdp/${cleanHomes.id}`}>
                                    <img className={c.cleanHome__img} src={cleanHomes.category.image} alt="" />
                                    <div className={c.cleanHome__wrapper}>
                                        <p className={c.cleanHome__title}>{cleanHomes.title}</p>
                                        <p className={c.cleanHome__price}>{cleanHomes.price}</p>
                                    </div>
                                </Link>
                                <div className={c.cleanHome__btn__wrapper}>
                                    <button className={c.cleanHome__btn}>
                                        <FiShoppingCart className={c.cleanHome__icon}/>
                                    </button>
                                </div>
                            </li>
                        )
                    }
                </ul>
                <button className={c.cleanHome__swiper__btn} data-btn-type="right" onClick={swipeRight}>
                    <GrFormNext className={c.cleanHome__swiper__icon}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CleanHome