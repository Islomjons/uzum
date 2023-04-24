import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsHeart } from "react-icons/bs"
import { GrCompare } from "react-icons/gr"
import c from "./Pdp.module.css"

const Pdp = () => {
  const btnWidth = {
    width: "20px",
    height: "20px"
  }
  const { id } = useParams()
  const [activeImgOver, setActiveImgOver] = useState(0)
  const [singleProductData, setSingleProductData] = useState(null)
  useEffect(() => {
      fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
          .then(response => response.json())
          .then(data => setSingleProductData(data))
  }, [])
  return (
    <div className={c.pdp}>
        <div className={c.container}>
            <div className={c.pdp__list__wrapper}>
                <div className={c.pdp__list}>
                    {
                        singleProductData !== null && singleProductData ? 
                        <>
                            <div className={c.pdp__item}>
                                <h3 className={c.pdp__heading}>{singleProductData.description}</h3>
                                <div className={c.pdp__btn__wrapper}>
                                    <button className={c.pdp__btn}>
                                        <BsHeart style={btnWidth}/>
                                    </button>
                                    <button className={c.pdp__btn}>
                                        <GrCompare style={btnWidth}/>
                                    </button>
                                </div>
                                <img className={c.pdp__image} src={singleProductData.category.image} alt="" />
                                <div className={c.pdp__img__wrapper}>
                                    { 
                                        singleProductData.images.map((imagess, index) => 
                                            <img className={c.pdp__imgs} key={imagess.id} style={index === activeImgOver ? {boxShadow: "0px 0px 3px 3px orange"} : null} onClick={() => {setActiveImgOver(index)}} src={imagess} alt="" />
                                        )
                                    }
                                </div>
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
                <div className={c.pdp__right}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pdp