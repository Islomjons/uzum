import React from 'react'
import c from "./ForChilds.module.css"
import forChildsImg from "../../assets/images/forChild.jpeg"
import { Link } from 'react-router-dom'

const ForChilds = () => {
  return (
    <div className={c.forchilds}>
        <div className={c.forchilds__container}>
            <Link>
                <img className={c.forchilds__img} src={forChildsImg} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default ForChilds