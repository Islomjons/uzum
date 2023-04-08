import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./SeeAll.css"
import { FiShoppingCart } from "react-icons/fi"

const SeeAll = () => {
  const [seeAllJson, setSeeAllJson] = useState([])
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setSeeAllJson(data.slice(20, 25)))
  }, [])
  return (
    <div className="seeAll">
        <div className="container">
            <div className="seeAll__container">
                <button className="seeAll__btn">Yana Korsatish</button>
            </div>
            <ul className="seeAll__list">
                {
                    seeAllJson.map((SeeAlls, id) => 
                      <li key={id} className="seeAll__item">
                          <Link style={{textDecoration: "none"}} to={`/pdp/${SeeAlls.id}`}>
                              <img className="seeAll__img" src={SeeAlls.category.image} alt="" />
                              <div className="seeAll__wrapper">
                                  <p className="seeAll__title">{SeeAlls.title}</p>
                                  <p className="seeAll__price">{SeeAlls.price}</p>
                              </div>
                          </Link>
                          <div className="seeAll__btn__wrapper">
                            <button className="seeAll__btn__cart">
                                <FiShoppingCart className="seeAll__icon"/>
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

export default SeeAll