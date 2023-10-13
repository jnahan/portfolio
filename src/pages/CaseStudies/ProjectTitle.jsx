import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectInfo({chips, title, description, image}) {
  return (
    <div>
      <div className="project-title">
        <div className="chip-wrapper">
          {chips.map(chip => {
            return (
              <div className="chip">{chip}</div>
            )
          })}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <LazyLoadImage className="img" src={image} alt={title} />
    </div>
  )
}

export default ProjectInfo