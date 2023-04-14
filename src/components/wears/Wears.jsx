import React from 'react'
import c from "./Wears.module.css"
import Wearss from "../../assets/images/wears.jpeg"

const Wears = () => {
  return (
    <div className={c.wears}>
        <div className={c.container}>
            <img className={c.wears__img} src={Wearss} alt="" />
        </div>
    </div>
  )
}

export default Wears