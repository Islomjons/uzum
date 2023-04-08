import React from 'react'
import c from "./Darhol.module.css"
import DarholImg from "../../assets/images/darhol.jpeg"
import { Link } from 'react-router-dom'

const Darhol = () => {
  return (
    <div className={c.darhol}>
        <div className={c.container}>
            <div className={c.darhol__wrapper}>
                <Link>
                  <img className={c.darhol__img} src={DarholImg} alt="" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Darhol