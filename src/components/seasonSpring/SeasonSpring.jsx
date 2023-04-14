import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./SeasonSpring.module.css"
import { GrFormNext } from "react-icons/gr"

const SeasonSpring = () => {
    const [seasonSpringJson, setSeasonSpringJson] = useState([])
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
                <ul className={c.seasonSpring__list}>
                    {
                        seasonSpringJson.map((seasonSprings, id) => 
                            <li className={c.seasonSpring__list}>
                                <Link style={{textDecoration: "none"}} to={`/pdp/${seasonSprings.id}`}>
                                    <img className={c.seasonSpring__img} src={seasonSprings.category.image} alt="" />
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SeasonSpring