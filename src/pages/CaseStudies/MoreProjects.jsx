import React from "react"
import { Link } from "react-router-dom"

import arrowLeft from "../../images/icons/arrow-left-solid.svg"
import arrowRight from "../../images/icons/arrow-right-solid.svg"

function MoreProjects({title, link}) {
  return (
    <div className='more-projects'>
        <div className="more-projects__button">
            <img className="arrow" src={arrowLeft} alt="left arrow" />
            <Link className="nav__link" to="/">Back Home</Link>
        </div>
        <div className="more-projects__button">
            <Link className="nav__link" to={`/${link}`}>{title}</Link>
            <img className="arrow" src={arrowRight} alt="right arrow" />
        </div>
    </div>
  )
}

export default MoreProjects