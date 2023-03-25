import React from 'react'
import { Link } from 'react-router-dom'
import c from "./HeaderBottom.module.css"
import uzumLogo from "../../assets/images/uzum.svg"
import { GrCatalogOption } from "react-icons/gr"
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { useTranslation } from 'react-i18next'

const HeaderBottom = ({setIsSignUpActive, setIsCatalogActive}) => {
  const { t } = useTranslation()
  return (
    <div className={c.headerBottom}>
        <div className={c.container}>
            <div className={c.headerBottom__container}>
                <Link to="/" className={c.headerBottom__link}>
                    <img className={c.uzum__header__logo} src={uzumLogo} alt="" />
                </Link>
                <button className={c.headerBottom__btn} onClick={() => {setIsCatalogActive(true)}}>
                    <GrCatalogOption style={{width: "19px", height: "19px",     color: "33c"}}/>
                    {t("catalog")}
                </button>
                   <input className={c.headerBottom__input} type="text" placeholder={t("searchProduct")}/>
                  <button className={c.headerBottom__input__btn}>
                     <AiOutlineSearch style={{width: "24px", height: "24px"}}/>
                  </button>
                <button className={c.compare__wrapper} onClick={() => {setIsSignUpActive(true)}}>
                    <FaRegUser style={{width: "16px", height: "18px"}}/>
                    <p className={c.headerBottom__compare__text}>{t("enter")}</p>
                </button>
                <Link className={c.compare__wrapper} to="/like">
                    <FiHeart style={{width: "24px", height: "24px"}}/>
                    <p className={c.headerBottom__compare__text}>{t("like")}</p>
                </Link>
                <Link className={c.compare__wrapper} to="/cart">
                    <FiShoppingCart style={{width: "24px", height: "24px"}}/>
                    <p className={c.headerBottom__compare__text}>{t("cart")}</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeaderBottom