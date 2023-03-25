import { useState } from 'react'
import c from "./Header.module.css"
import { GoLocation } from "react-icons/go"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid';
import { changeLanguage } from 'i18next'

const Header = () => {
  const { t } = useTranslation()
  const [changeLang, setChangeLang] = useState(localStorage.getItem("lang"))
  const { i18n } = useTranslation()
  const changeWebSiteLang = (evt) => {
    i18n.changeLanguage(evt.target.value || "uz")
  }
  localStorage.getItem("lang")
  const langs = [
    "O'zbekcha",
    "Ruscha",
  ]
  return (
    <div className={c.header}>
        <div className={c.container}>
            <div className={c.header__container}>
                <div className={c.header__wrapper}>
                    <GoLocation />
                    <p className={c.header__text}>{t("city")}: <span className={c.header__region}>{t("region")}</span></p>
                </div>
                <div className={c.header__reach__wrapper}>
                    <Link className={c.header__reach}>{t("reach")}</Link>
                </div>
                <div className={c.header__one__wrapper}>
                    <p className={c.header__one}>{t("oneDay")}</p>
                </div>
                <ul className={c.header__right__list}>
                    <li className={c.header__right__item}>
                        <Link className={c.header__right__link}>{t("quetions")}</Link>
                    </li>
                    <li className={c.header__right__item}>
                        <p className={c.header__right__link1}>{t("myOrders")}</p>
                    </li>
                    <li className={c.header__right__item}>
                        <select className={c.header__change__select} onChange={changeWebSiteLang}>
                              {
                                langs.map(langsItem => 
                                  <option key={uuidv4()} selected={localStorage.getItem("lang") === langsItem ? true : false} value={langsItem}>{langsItem}</option>  
                                )
                              }
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header