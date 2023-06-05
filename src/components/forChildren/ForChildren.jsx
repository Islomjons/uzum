import React from 'react'
import { Link } from 'react-router-dom'
import  c from "./ForChildren.module.css"
import { GrFormNext } from "react-icons/gr"

const ForChildren = () => {
  return (
    <div className={c.forChildren}>
        <div className={c.forChildren__container}>
            <div className={c.forChildren__wrapper}>
                  <Link className={c.forChildren__heading}>Bolalar uchun</Link>
                  <button className={c.forChildren__next__btn}>
                      <GrFormNext className={c.forChildren__next__icon}/>
                  </button>
            </div>
        </div>
    </div>
  )
}

export default ForChildren