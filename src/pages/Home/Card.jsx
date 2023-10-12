import React from 'react'
import { Link } from "react-router-dom"

function Card({title, description, link, imgSrc, chips, size}) {
  return (
    <Link to = {link} className={`card ${size}`} key={title}>
      <div>
          <div className='card__img' style={{backgroundImage: `url(${imgSrc})`}}>
          </div>
          <h3 className='card__title'>{title}</h3>
          <p className='card__description'>{description}</p>
          <div className='chip-wrapper'>
            {chips.map(chip => {
              return (
                <div className='chip'>{chip}</div>
              )
            })}
          </div>
      </div>
    </Link>
  )
}

export default Card