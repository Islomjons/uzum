import React, { useEffect, useState } from 'react'
import c from "./Uzauto.module.css"
import { GrFormNext } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"

const Uzauto = () => {
    const [uzautoJson, setUzautoJson] = useState([])
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setUzautoJson(data.slice(35, 40)))
    }, [])
  return (
    <div className={c.uzauto}>
        <div className={c.container}>
            <div className={c.uzauto__container}>
                <Link style={{textDecoration: "none"}}>
                   <h3 className={c.uzauto__heading}>UzAuto Motors</h3>
                </Link>
                <button className={c.uzauto__btn}>
                     <GrFormNext className={c.uzauto__icon}/>
                </button>
            </div>
            <ul className={c.uzauto__list}>
                {   
                    uzautoJson.map((uzAuto, id) => 
                        <li className={c.uzauto__item} key={id}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${uzAuto.id}`}>
                                <img className={c.uzAuto__img} src={uzAuto.category.image} alt="" />
                                <div className={c.uzAuto__wrapper}>
                                    <p className={c.uzAuto__title}>{uzAuto.title}</p>
                                    <p className={c.uzAuto__price}>{uzAuto.price}</p>
                                </div>
                            </Link>
                            <div className={c.uzauto__btn__wrapper}>
                                <button className={c.uzauto__cart__btn}>
                                    <FiShoppingCart className={c.uzauto__icon}/>
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

export default Uzauto