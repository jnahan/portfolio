import React from "react"
import { projects } from "../../data/projectData"
import ProjectInfo from "./ProjectTitle"

import cover from "../../images/draw-together/draw-together-cover-image.png"
import ca1 from "../../images/draw-together/skribbl.io.png"
import ca2 from "../../images/draw-together/painting-swap.png"
import ca3 from "../../images/draw-together/aggie.io.png"
import flow from "../../images/draw-together/user-flow.png"
import low1 from "../../images/draw-together/low-home.png"
import low2 from "../../images/draw-together/low-mode.png"
import low3 from "../../images/draw-together/low-settings.png"
import low4 from "../../images/draw-together/low-canvas.png"
import style from "../../images/draw-together/style-guide.png"
import ut1 from "../../images/draw-together/user-testing1.png"
import ut2 from "../../images/draw-together/user-testing2.png"
import utDrawings from "../../images/draw-together/user-testing-drawings.png"
import high1 from "../../images/draw-together/high-home.png"
import high2 from "../../images/draw-together/high-settings.png"
import high3 from "../../images/draw-together/high-mode.png"
import high4 from "../../images/draw-together/high-canvas.png"
import old1 from "../../images/draw-together/old-tutorial.png"
import new1 from "../../images/draw-together/new-tutorial.png"
import old2 from "../../images/draw-together/old-canvas.png"
import new2 from "../../images/draw-together/new-canvas.png"
import features from "../../images/draw-together/new-features.png"
import new3 from "../../images/draw-together/new-swap.png"

function DrawTogether() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="case-study">
      <section className="section">
        <ProjectInfo
          chips = {projects[4].chips}
          title = {projects[4].title}
          description = {projects[4].description}
          image = {cover}
        />
      </section>
      <section className="section">
        <hr className="project-info__divider" />
        <div className="project-info">
          <div>
            <h6 className="project-info__heading">Role</h6>
            <p className="project-info__text">
              UI/UX Designer <br />
              Developer
            </p>
          </div>
          <div>
            <h6 className="project-info__heading">Team</h6>
            <p className="project-info__text">
              1 UI designer <br />
              1 UI/UX Designer / Developer <br />
              1 Developer
            </p>
          </div>
          <div>
            <h6 className="project-info__heading">Project Type</h6>
            <p className="project-info__text">Personal Project</p>
          </div>
          <div>
            <h6 className="project-info__heading">Timeline</h6>
            <p className="project-info__text">Dec 2022 - Jan 2023</p>
          </div>
        </div>
        <hr className="project-info__divider" />
      </section>
      <div className="case-study-content">
        <section className="section">
          <h5 className="section__name">Overview</h5>
          <h3 className="section__title">Making Art More Meaningful Through Collaboration</h3>
          <p className="section__text">
            Creating art is a fun and relaxing way to express yourself, but it’s an activity that’s often done alone. To make art a more collaborative experience, I created Draw Together, a game that allows players to work together to create unique and meaningful art. This project took two months to design, develop, and user test.      
          </p>
        </section>
        <section className="section">
          <h5 className="section__name">Design Challenge</h5>
          <h3 className="section__title">How might we make art a more collaborative and meaningful activity for friends? </h3>
        </section>
        <section className="section">
          <h5 className="section__name">Competitive Analysis</h5>
          <h3 className="section__title">Examining popular drawing games and challengess</h3>
          <p className="section__text">I analyzed popular drawing games and their pros and cons for inspiration.</p>
          <div className="col section__img">
            <div className="col col--dt">
              <img className="img img--dt" src={ca1} alt="Skribbl.io" />
              <h6>Skribbl.io</h6>
              <p>Online draw and guess game</p>
            </div>
            <div className="col col--dt">
              <img className="img img--dt" src={ca2} alt="painting swap challenge" />
              <h6>Painting Swap Challenge</h6>
              <p>Paint and swap with partner</p>
            </div>
            <div className="col col--dt">
              <img className="img img--dt" src={ca3} alt="Aggie.io" />
              <h6>Aggie.io by Magma</h6>
              <p>Collaborative Drawing</p>
            </div>
          </div>
        </section>
        <section className="section">
          <h5 className="section__name">Brainstorming</h5>
          <h3 className="section__title">Our game ideas</h3>
          <p className="section__text">
            Through competitive analysis, we knew our idea had potential. Collaborative drawing seemed to be effective in making art more fun! <br /> <br />

            We used this knowledge to guide our ideation and came up with three game ideas: Draw Together, Canvas Swap, and Top Bottom. <br /> <br />

            <strong>Draw Together:</strong> draw with other players in real-time <br />
            <strong>Canvas Swap:</strong> digitized version of the painting swap challenge <br />
            <strong>Top Bottom:</strong> players draw on separate parts of the canvas <br /> <br />

            With these ideas, <strong>we also aimed to solve problems found in the games and challenges we analyzed.</strong> We could eliminate cheating in games like Skribbl.io by promoting collaboration rather than competition and remove the mess and cost of traditional art. <strong>We also wanted to create a friendly, easy-to-use interface so users of all skill levels can enjoy our games.</strong> 
          </p>
        </section>
        <section className="section">
          <h5 className="section__name">Narrowing Scope</h5>
          <h3 className="section__title">MVP definition</h3>
          <p className="section__text">
            As we are a small team, we needed to define our MVP to save time and validate our ideas. <br /> <br />

            We set aside ideas like real time-chatting and customizable game settings for future iterations. We decided on creating a simple desktop web app that let users create and join rooms with one other player, choose a game option, then play the game with simple drawing tools.  
          </p>
        </section>
        <section className="section">
          <h5 className="section__name">User Flow</h5>
          <h3 className="section__title">Defining host and player flows</h3>
          <div className="img-wrapper section__img">
              <img className="img" src={flow} alt="user flow diagram" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__name">Wireframes</h5>
          <h3 className="section__title">Low fidelity wireframes</h3>
            <p className="section__text">
              We started off with a low fidelity wireframe to define our vision as a team. I worked with one other designer on the wireframes. <br /> <br />

              Upon discussion, we chose to remove the tutorial animations due to time constraints and removed the ability to name the room to simplify the setup process. We also decided to replace the rectangular canvas with a square one to better accommodate mobile users in future iterations. The drawing tool icons felt unclear, so we decided to redesign the palette to be more intuitive. These changes are reflected in our final mockup.      
            </p>
          <div className="col">
            <div className="img-wrapper">
                <img className="img" src={low1} alt="low-fidelity home" />
                <img className="img" src={low2} alt="low-fidelity settings" />
            </div>
            <div className="img-wrapper">
              <img className="img" src={low3} alt="low-fidelity game mode" />
                <img className="img" src={low4} alt="low-fidelity canvas" />
            </div>
          </div>
        </section>
        <section className="section">
          <h5 className="section__name">Style Guide</h5>
          <h3 className="section__title">Fun and playful style guide</h3>
          <p className="section__text">
            As this is a drawing game, we wanted to make the UI playful and fun. To achieve this, we used a handwritten font for headings and a more readable monoscript font for smaller texts. We also used hand-drawn illustrations throughout the website with a pastel color palette.    
          </p>
          <div className="img-wrapper section__img">
              <img className="img" src={style} alt="style guide" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__name">Mockups</h5>
          <h3 className="section__title">High-fidelity mockups</h3>
          <p className="section__text">
            We applied our style guide to create the first mockup of our game. We also addressed problems identified with our low-fidelity wireframes in these mockups.      
          </p>
          <div className="col">
          <div className="img-wrapper">
              <img className="img" src={high1} alt="home mockup" />
              <img className="img" src={high2} alt="settings mockup" />
          </div>
            <div className="img-wrapper">
              <img className="img" src={high3} alt="game mode mockup" />
              <img className="img" src={high4} alt="canvas mockup" />
            </div>
          </div>
        </section>
        <section className="section">
          <h5 className="section__name">Development</h5>
          <h3 className="section__title">Developing Draw Together</h3>
          <p className="section__text">
            We decided to use React, Node, and Socket for our tech stack. This was the first time we were working with these tools and libraries, so this project presented a great learning opportunity for us. We used style guide, components, and auto layout when designing, which helped us speed up development. <br /> <br />

            <a className="content-link" href="https://fine-outgoing-hornet.glitch.me/" target="_blank">Try out the game here!</a>
          </p>
        </section>
        <section className="section">
          <h5 className="section__name">User Testing</h5>
          <h3 className="section__title">User Testing</h3>
          <p className="section__text">
            We conducted user testing with six different participants. I took note of common pain points and feedback and made three major changes based on user feedback.       
          </p>
          <div className="col section__img">
            <div className="img-wrapper">
              <img className="img" src={ut1} alt="user testing" />
            </div>
            <div className="img-wrapper">  
              <img className="img" src={ut2} alt="user testing" />
            </div>
            </div>
          <div className="img-wrapper section__img">
            <img className="img" src={utDrawings} alt="user testing drawings" />
          </div>
        </section>
        <section className="section">
          <div>
            <h4 className = "section__title--small">1. Tutorial Popup</h4>
            <p>
              Originally, the games started automatically after a short countdown. Many users expressed confusion and frustration because of this. To address this, we added a popup with a quick tutorial and information about the other player. This will provide users with a better understanding of the game mechanics and confirm they are matched with the intended player.
            </p>
            <div className="col section__img">
              <div className="img-wrapper">
                <img className="img" src={old1} alt="old tutorial" />
              </div>
              <div className="img-wrapper">  
                <img className="img" src={new1} alt="new tutorial" />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div>
            <h4 className = "section__title--small">2. New Canvas Tools, Features</h4>
            <p>We also added new canvas tools and features based on user feedback:</p>
            <div className="col section__img">
              <div className="img-wrapper">
                <img className="img" src={old2} alt="old canvas" />
              </div>
              <div className="img-wrapper">  
                <img className="img" src={new2} alt="new canvas" />
              </div>
              <div className="section__img">
                <img className="img" src={features} alt="new features" />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
        <div>
            <h4 className = "section__title--small">3. Better Swapping Transition</h4>
            <p>Users have noted that the swapping felt “glitchy” because it happened too quickly. To resolve this, we added a swapping transition and made the countdown timer blink when there are less than five seconds left.</p>
            <div className="img-wrapper section__img">
              <img className="img" src={new3} alt="new transition" />
            </div>
          </div>
        </section>
        <section className="section">
          <h5 className="section__name">Outcome</h5>
          <h3 className="section__title">Outcome</h3>
          <p className="section__text">
            We were thrilled to learn that the usability testing participants found the game fun, cute, and easy to navigate! I have discussed the changes I made with the other developer and we will be moving forward with implementing them. We are hoping to implement these changes by April (as an update, majority of these changes have been implemented!).       
          </p>
        </section>
        <section className="section">
          <h5 className="section__name">Reflection</h5>
          <h3 className="section__title">Reflection & Takeaways</h3>
          <p className="section__text">
            This project was particularly fulfilling as it allowed me to bring a fun idea I had to life, and I learned a lot in the process. It was my teammate and my first time using React, Socket, and Node, meaning we had to learn a lot of new tools in the process. I am incredibly proud that we were able to learn new frameworks and apply them within such a tight timeline. <br /> <br />

            Here are some of my takeaways: <br /> <br />

            <strong>Don"t let your skills limit you:</strong> <br />
            My friend and I initially thought that we wouldn"t be able to complete this project because we had never created a full-stack project before and had no experience with the coding frameworks we were using. I was also nervous because it was my first time developing a large project I designed on Figma. However, we pushed through and completed the project, which allowed us to grow and challenge ourselves. <br /> <br />

            <strong> Knowing how to code is extremely helpful as a designer:</strong> <br />
            
            Before I focused on design, I felt conflicted because I enjoyed both design and development. However, this project made me realize that having knowledge in both areas is hugely beneficial. I can create self-directed projects and this knowledge helps me bridge the gap between design and development. I had a better understanding of what steps were needed to build the project, and I could even provide some code instructions along with my design document to help the team work more quickly and efficiently.
          </p>
        </section>
      </div>
    </div>
  )
}

export default DrawTogether