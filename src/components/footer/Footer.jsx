import React from 'react'
import { Link } from 'react-router-dom'
import c from "./Footer.module.css"
import { BsApple, BsInstagram, BsYoutube } from "react-icons/bs"
import { FaGooglePlay, FaTelegram, FaFacebookSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={c.footer}>
        <div className={c.footer__container}>
            <ul className={c.footer__list}>
                <li className={c.footer__item}>
                    <h3 className={c.footer__heading}>Biz haqimizda</h3>

                    <ul className={c.footer__lists}>
                        <li className={c.footer__item}>
                            <Link className={c.footer__item__link}>Topshirish punktlari</Link>
                        </li>
                        <li className={c.footer__item}>
                            <Link className={c.footer__item__link}>Vakansiyalar</Link>
                        </li>
                    </ul>
                </li>
                <li className={c.footer__item}>
                    <h3 className={c.footer__heading}>Foydalanuvchilarga</h3>

                    <ul className={c.footer__lists}>
                        <li className={c.footer__item}>
                            <Link className={c.footer__item__link}>Biz bilan bog`lanish</Link>
                        </li>
                        <li className={c.footer__item}>
                            <Link className={c.footer__item__link}>Savol-Javob</Link>
                        </li>
                    </ul>
                </li>
                <li className={c.footer__item}>
                    <h3 className={c.footer__heading}>Tadbirkorlarga</h3>

                    <ul className={c.footer__lists}>
                        <li className={c.footer__item}>
                            <Link className={c.footer__item__link}>Uzumda soting</Link>
                        </li>
                        <li className={c.footer__item}>
                            <Link className={c.footer__item__link}>Sotuvchi kabinetiga kirish</Link>
                        </li>
                    </ul>
                </li>
                <li className={c.footer__item}>
                    <h3 className={c.footer__heading}>Ilovani yuklab olish</h3>

                    <ul className={c.footer__lists}>
                        <li className={c.footer__item}>
                            <div className={c.footer__item__wrapper}>
                                <Link className={c.footer__list__link}>
                                    <BsApple className={c.footer__list__icon}/>
                                    <p className={c.footer__list__text}>AppStore</p>
                                </Link>
                                <Link className={c.footer__list__link}>
                                    <FaGooglePlay className={c.footer__list__icon}/>
                                    <p className={c.footer__list__text}>Google Play</p>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            
            <ul className={c.footer__main__list}>
                <li className={c.footer__main__item}>
                    <h4 className={c.footer__main__heading}>Uzum ijtimoiy tarmoqlarda</h4>
                    <div className={c.footer__main__item__wrapper}>
                        <Link>
                            <BsInstagram className={c.footer__main__item__icon}/>
                        </Link>
                        <Link>
                            <FaTelegram className={c.footer__main__item__icon}/>
                        </Link>
                        <Link>
                             <BsYoutube className={c.footer__main__item__icon}/>
                        </Link>
                        <Link>
                             <FaFacebookSquare className={c.footer__main__item__icon}/>
                        </Link>
                    </div>
                </li>
            </ul>

            <div className={c.footer__bottom__list}>
               <div className={c.footer__bottom__lists}>
                <p className={c.footer__bottom__item1}>Maxfiylik kelishuvi Foydalanuvchi kelishuvi</p>
                <p className={c.footer__bottom__item2}>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer