import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import c from "./Cart.module.css"
import { CgMathPlus, CgMathMinus, CgHeart, CgTrash } from "react-icons/cg"

const Cart = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  return (
    <div className={c.cart}>
        <div className={c.container}>
            <div className={c.cart__container}>
                <div className={c.cart__header}>
                    <h1 className={c.cart__heading}>Savatingiz</h1>
                </div>
                <div className={c.cart__body}>
                    {
                        selector?.cart?.cart.map((product) => 
                          <div className={c.cart__item}>
                              <div className={c.cart__left}>
                                  <img className={c.cart__img} src={product.image} alt="" />
                                  <div className={c.cart__info}>
                                     <Link to={`/product/${product.id}`} style={{textDecoration: "none"}}>
                                      <p className={c.cart__title}>{product.title}</p>
                                      <p className={c.product__price}>{product.price}</p>
                                     </Link>
                                  </div>
                              </div>
                              <div className={c.cart__right}>
                                  <div className={c.cart__right__product}>
                                      <button className={c.cart__right__btn} onClick={() => {
                                        dispatch({
                                          type: "INCREMENT",
                                          data: {
                                             id: product.id,
                                             count: product.count
                                          }
                                        })
                                      }}>
                                          <CgMathMinus style={{width: "20px", height: "20px", cursor: "pointer"}}/>
                                      </button>
                                      <span className={c.cart__product__number}>{product.count}</span>
                                      <button className={c.cart__right__btn} onClick={() => {
                                        dispatch({
                                          type: "INCREMENT",
                                          data: product
                                        })
                                      }}>
                                          <CgMathPlus style={{width: "20px", height: "20px", cursor: "pointer"}}/>
                                      </button>
                                  </div>
                                  <div className={c.cart__right__btns}>
                                      <CgHeart style={{width: "20px", height: "20px", cursor: "pointer"}}/>
                                      <CgTrash style={{width: "20px", height: "20px", cursor: "pointer"}} onClick={() => {
                                        dispatch({
                                          type: "REMOVE_PRODUCT",
                                          data: product
                                        })
                                      }}/>
                                  </div>
                              </div>
                          </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart