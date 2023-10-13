import React from "react"
import { projects } from "../../data/projectData"

import Card from "./Card"
import Cat from "./Cat"

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function getProjectCards(start, end){
    return projects.slice(start, end).map((project) => {
      return (
      <Card
        title={project.title}
        description={project.description}
        link={project.link}
        imgSrc={project.imgSrc}
        chips={project.chips}
        size={project.size}
      />
      )
    })
  }

  return (
    <div className="home">
      <div className="home-top">
        <section className="section hero">
          <div>
            <h2 className="hero__heading">Hello! My name is Jenna Han</h2>
            <p className="hero__description">I’m a multidisciplinary product designer at NYU. I love creating intuitive, user-centered designs and bringing them to life with code!</p>
          </div>
          <Cat ></Cat>
        </section>
        <section className="section card-wrapper">
          <div className="card-container">
            {getProjectCards(0,2)}
          </div>
          <div className="card-container">
            {getProjectCards(2, 4)}
          </div>
        </section>
      </div>
      <div className="jenna">
        <div className="track">
            <p id="infinite-text">
              ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han ✽ jenna han
            </p>
        </div>
      </div>
      <div className="home-bottom">
        <section className="section more-works">
          <h2 className="more-works__heading">Check out more fun works!</h2>
          <div className="card-container">
            {getProjectCards(4, 7)}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home