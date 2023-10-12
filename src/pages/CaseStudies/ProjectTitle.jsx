import React from 'react'

function ProjectInfo({chips, title, description, image}) {
  return (
    <div>
      <div className='project-title'>
        <div className='chip-wrapper'>
          {chips.map(chip => {
            return (
              <div className='chip'>{chip}</div>
            )
          })}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img className='img' src={image} alt="" />
    </div>
  )
}

export default ProjectInfo