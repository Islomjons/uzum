import React from 'react'
import c from "./Techno.module.css"
import imgTechno from "../../assets/images/techno.jpeg"

const Techno = () => {
  return (
    <div className={c.techno}>
        <div className={c.techno__wrapper}>
            <img className={c.techno__img} src={imgTechno} alt="" />
        </div>
    </div>
  )
}

export default Techno