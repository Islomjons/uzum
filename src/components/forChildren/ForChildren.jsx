import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  c from "./ForChildren.module.css"
import { GrFormNext } from "react-icons/gr"

const ForChildren = () => {
  const [forChildrenJson, setForChildrenJson] = useState([])

  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setForChildrenJson(data.slice(115, 130)))
  }, [])
  return (
    <div className={c.forChildren}>
        <div className={c.forChildren__container}>
            <div className={c.forChildren__wrapper}>
                  <Link className={c.forChildren__heading}>Bolalar uchun</Link>
                  <button className={c.forChildren__next__btn}>
                      <GrFormNext className={c.forChildren__next__icon}/>
                  </button>
            </div>
            <ul className={c.forChildren__list}>
                {
                    forChildrenJson.map((forChildrenApi, id) => 
                        <li className={c.forChildren__item} key={id}>
                            <Link style={{textDecoration: "none"}} to={`/pdp/${forChildrenApi.id}`}>
                                <img className={c.forChildren__img} src={forChildrenApi.category.image} alt="" />
                                <div className={c.forChildren__item__wrapper}>
                                    <p className={c.forChildren__title}>{forChildrenApi.title}</p>
                                    <p className={c.forChildren__price}>{forChildrenApi.price}</p>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default ForChildren