import React from "react"

function Insight({title, text}) {
  return (
    <div className="insight">
        <h4>{title}</h4>
        <p className="insight__description">{text}</p>
    </div>
  )
}

export default Insight