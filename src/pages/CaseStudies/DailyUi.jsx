import React from "react"
import { projects } from "../../data/projectData"
import { LazyLoadImage } from "react-lazy-load-image-component";

import ProjectInfo from "./ProjectTitle"
import MoreProjects from "./MoreProjects";

import cover from "../../images/daily-ui/daily-ui-cover-image.png"
import design1 from "../../images/daily-ui/1_signup.png"
import design2 from "../../images/daily-ui/14_countdown_timer.png"
import design3 from "../../images/daily-ui/18_analytics_chart.png"
import design4 from "../../images/daily-ui/22_search.png"
import design5 from "../../images/daily-ui/25_tv_app.png"
import design6 from "../../images/daily-ui/35_blog_post.png"
import design7 from "../../images/daily-ui/38_calendar.png"
import design8 from "../../images/daily-ui/50_job_listing.png"

const designs = [
  {img: design1, prompt: "Day 1 - Sign Up"},
  {img: design2, prompt: "Day 14 - Countdown Timer"},
  {img: design3, prompt: "Day 18 - Analytics Chart"},
  {img: design4, prompt: "Day 22 - Search"},
  {img: design5, prompt: "Day 25 - TV App"},
  {img: design6, prompt: "Day 35 - Blog Post"},
  {img: design7, prompt: "Day 38 - Calendar"},
  {img: design8, prompt: "Day 50 - Job Listing"}
]

function DailyUi() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="case-study">
      <section className="section">
        <ProjectInfo
          chips={projects[5].chips}
          title={projects[5].title + " Challenge"}
          description={projects[5].description}
          image={cover}
        />
      </section>
      <section className="section">
        <hr className="project-info__divider" />
        <div className="project-info">
          <div>
            <h6 className="project-info__heading">Role</h6>
            <p className="project-info__text">
              UI Designer
            </p>
          </div>
          <div>
            <h6 className="project-info__heading">Project Type</h6>
            <p className="project-info__text">Design Challenge</p>
          </div>
          <div>
            <h6 className="project-info__heading">Timeline</h6>
            <p className="project-info__text">Summer 2023</p>
          </div>
        </div>
        <hr className="project-info__divider" />
      </section>
      <div className="case-study-content">
        <section className="section">
          <h5 className="section__heading">OVERVIEW</h5>
          <h3 className="section__title">50 days of UI design</h3>
          <p className="section__text">
            As I had a lot of time during summer break, I decided to do the Daily UI Challenge for 50 days. <br />  <br />
            I thought this challenge would: <br /> <br />
          </p>
          <ul>
            <li>Be a good opportunity to try out new design styles</li>
            <li>Help me design quicker</li>
            <li>Make designing a part of my daily routine</li>
          </ul>
        </section>
        <section className="section">
          <h5 className="section__heading">Designs</h5>
          <h3 className="section__title">Check Out My Favorite Designs</h3>
          <div className="section__img">
            {designs.map(design => {
              return (
              <div className="daily-ui-design">
                <div className="img-wrapper">
                  <LazyLoadImage className="img" src={design.img} alt={design.prompt} />
                </div>
                <p>{design.prompt}</p>
              </div>
              )
            })}
          </div>
        </section>
        <section className="section">
          <h5 className="section__name">REFLECTION</h5>
          <h3 className="section__title">Reflection</h3>
          <p className="section__text">
            I had a lot of fun working on this challenge! One of the biggest challenges I used to have when designing was wasting time overthinking my designs. However, the breadth and time constraint provided by this project helped me make critical decisions and design quicker. I also loved that I got to experiment with a lot of new design styles and tools without the pressure that comes with a larger project. I would definitely recommend other designers to try this challenge out!
          </p>
        </section>
        <section className="section">
          <MoreProjects
            title={projects[6].title}
            link={projects[6].link}
          />
        </section>
      </div>
    </div>
  )
}

export default DailyUi