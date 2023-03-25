import React, { useEffect, useRef, useState } from 'react'
import c from "./Hero.module.css"
import heroImgJson from "../../api/dummiy-data.heroImgSwiper.json"
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

const Hero = () => {
 const elCarausel = useRef()
 const [swiperCarausel, setSwiperCarausel] = useState(0)

 const swipeRight = () => {
    if (swiperCarausel < heroImgJson.length - 1) {
        setSwiperCarausel(swiperCarausel => swiperCarausel + 1)
    }else{
        setSwiperCarausel(0)
    }
 }

 const swipeLeft = () => {
    if (swiperCarausel > 0) {
        setSwiperCarausel(swiperCarausel => swiperCarausel - 1)
    }else{
        setSwiperCarausel(heroImgJson.length - 1)
    }
 }

 useEffect(() => {
     elCarausel.current.scrollLeft = swiperCarausel * elCarausel.current.offsetWidth
 }, [swiperCarausel])
  return (
    <div className={c.hero}>
        <div className={c.container}>
            <div className={c.hero__container}>
                <button className={c.hero__btn} data-btn-type="left" onClick={swipeLeft}>
                    <GrFormPrevious />
                </button>
                <ul className={c.hero__list} ref={elCarausel}>
                    {
                        heroImgJson.map(heroImgs => 
                            <li key={uuidv4()} className={c.hero__item}>
                                <Link to="/">
                                    <img className={c.hero__img} src={heroImgs} alt="" />
                                </Link>
                            </li>    
                        )
                    }
                </ul>
                <div className={c.dots__wrapper}>
                    {
                        heroImgJson.map((dots, index) => 
                            <div className={c.dots__item} key={uuidv4()} style={swiperCarausel === index ? {backgroundColor: "#333333", transform: "scale 1.3"} : null} onClick={() => {
                                setSwiperCarausel(index)
                            }}></div>
                        )
                    }
                </div>
                <button className={c.hero__btn} data-btn-type="right" onClick={swipeRight}>
                    <GrFormNext />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero