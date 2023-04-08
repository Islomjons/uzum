import React from 'react'
import { Link } from 'react-router-dom'
import c from "./Keshbek.module.css"
import keshbekImg from "../../api/dummiy-data.kashbek.json"
import { v4 as uuidv4 } from 'uuid';

const Keshbek = () => {
  return (
    <div className={c.keshbek}>
        <div className={c.container}>
            <Link>
                {
                    keshbekImg.map(keshbeks => 
                        <img key={uuidv4()} className={c.keshbek__img} src={keshbeks} alt="" />    
                    )
                }
            </Link>
        </div>
    </div>
  )
}

export default Keshbek