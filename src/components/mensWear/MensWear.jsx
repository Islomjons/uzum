import React, { useEffect, useState } from 'react'
import c from "./MensWear.module.css"

const MensWear = () => {
  const [mensWearJson, setMensWearJson] = useState([])
  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => console.log(data))
  }, [])
  return (
    <div className={c.mensWear}>
        <ul className={c.mensWear__list}>
            
        </ul>
        <div>
          <p>salom</p>
          <h1>Islomjon</h1>
        </div>
    </div>  
  )
}

export default MensWear