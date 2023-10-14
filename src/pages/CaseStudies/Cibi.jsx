import React from "react"
import { projects } from "../../data/projectData"

import ProjectInfo from "./ProjectTitle"
import MoreProjects from "./MoreProjects"

import cover from "../../images/cibi/cibi-cover-image.png"

function Cibi() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="case-study">
      <section className="section">
        <ProjectInfo
          chips={projects[2].chips}
          title={projects[2].title}
          description={projects[2].description}
          image={cover}
        />
      </section>
      <section className="section">
        <hr className="project-info__divider" />
        <div className="project-info">
          <div>
            <h6 className="project-info__heading">Role</h6>
            <p className="project-info__text">UI/UX Designer</p>
          </div>
          <div>
            <h6 className="project-info__heading">Project Type</h6>
            <p className="project-info__text">Client Work</p>
          </div>
          <div>
            <h6 className="project-info__heading">Timeline</h6>
            <p className="project-info__text">Jun 2023 - Aug 2023</p>
          </div>
        </div>
        <hr className="project-info__divider" />
      </section>
      <div className="case-study-content">
        <section className="section">
          <h5 className="section__heading">Overview</h5>
          <h3 className="section__title">Designing Cibi, a win-win solution for restaurants and diners</h3>
          <p className="section__text">
            During Summer 2023, I got the opportunity to work as a UI/UX designer at Cibi. Cibi is a new startup aiming to make dining a more affordable and engaging experience for college students. The app incentivizes users to eat at restaurants more frequently by offering bonuses diners can use to save on their next meal out. These bonuses also help restaurants with low occupancy fill up their tables. <br /> <br />

            My 3 month long project involved researching, designing, and prototyping Cibi’s MVP. This process involved tons of ideation and discussions with the project manager, and went through many different iterations. The demo version of the app will be shipped December of 2023. <br /> <br />

            Although I am unable to disclose specific details about my work, please feel free to <a className="content-link" target="_blank" rel="noopener" href="mailto: jh7765@nyu.edu">reach out</a> to me for more details!
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Reflection</h5>
          <h3 className="section__title">Reflection and takeaways</h3>
          <p className="section__text">
            Working at Cibi was fun as I found the product vision fascinating and I’m a very big foodie myself! It was great to work in a small, tight-knit team as we were able to do a lot of brainstorming together. I’m really excited that my design decisions will set the stage for this new app! <br /> <br />

            Here are some of my key takeaways: <br /> <br />

            <strong>User research can help you make critical decision</strong> <br />
            I worked very closely with the project manager to come up with features for Cibi. Although we had a few disagreements regarding which features would be the best to include, we were able to use user research in these moments to make user-centered and research-driven decisions. <br /> <br />

            <strong>Iteration is key</strong>  <br /> 
            I sometimes get scared when designing because I feel like my design has to be perfect and finalized in the first go. However, working at Cibi helped me realize that good design comes from a constant loop of feedback and improvements. I was surprised to see how the vision and design for Cibi developed over the months! <br /> <br />
          </p>
        </section>
        <section className="section">
          <MoreProjects
            title={projects[3].title}
            link={projects[3].link}
          />
        </section>
      </div>
    </div>
  )
}

export default Cibi