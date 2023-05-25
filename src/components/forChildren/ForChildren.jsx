import React from 'react'
import { Link } from 'react-router-dom'
import  c from "./ForChildren.module.css"

const ForChildren = () => {
  return (
    <div className={c.forChildren}>
        <div className={c.forChildren__container}>
            <div className={c.forChildren__wrapper}>
                  <Link className={c.forChildren__heading}>Bolalar uchun</Link>
            </div>
        </div>
    </div>
  )
}

export default ForChildren