import React from 'react'
import c from "./HeaderMiddle.module.css"
import headerMiddleLinks from "../../api/dummiy-data.headerMiddle.json"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const HeaderMiddle = () => {
  return (
    <div className={c.headerMiddle}>
        <div className={c.container}>
            <ul className={c.headerMiddle__list}>
                {
                    headerMiddleLinks.map(links => 
                      <li key={uuidv4()} className={c.headerMiddle__item}>
                          <Link className={c.headerMiddle__links}>{links.headerMiddleLink}</Link>
                      </li>  
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default HeaderMiddle