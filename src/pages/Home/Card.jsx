import React from "react"
import { Link } from "react-router-dom"

function Card({title, description, link, imgSrc, chips, external, size}) {
  const ConditionalWrapper = ({ condition, wrapper1, wrapper2, children }) =>
  condition ? wrapper1(children) : wrapper2(children);

  return (
        <ConditionalWrapper
            condition={external}
            wrapper1={children => 
                <a className={`card ${size}`} key={title} target='_blank' rel="noopener" href={link}>{children}</a>
            }
            wrapper2={children => 
                // <HashLink smooth className='link-card' to={link}>{children}</HashLink>
                <Link to={link} className={`card ${size}`} key={title}>{children}</Link>
            }
        >      <div>
          <div className="card__img" style={{backgroundImage: `url(${imgSrc})`}}></div>
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          <div className="chip-wrapper">
            {chips.map(chip => {
              return (
                <div className="chip">{chip}</div>
              )
            })}
          </div>
      </div>
    </ConditionalWrapper>
  )
}

export default Card