import React from "react"
import { projects } from "../../data/projectData"
import ProjectInfo from "./ProjectTitle"
import Insight from "./Insight"
import { LazyLoadImage } from "react-lazy-load-image-component";
import MoreProjects from "./MoreProjects";

import cover from "../../images/bondit/bondit-cover-image.png"
import ca from "../../images/bondit/competitive-analysis-matrix.png"
import ad1 from "../../images/bondit/theme-one-ad.png"
import q1 from "../../images/bondit/theme-one-quotes.png"
import persona1 from "../../images/bondit/user-persona-1.png"
import persona2 from "../../images/bondit/user-persona-2.png"
import journey1 from "../../images/bondit/user-journey-1.png"
import journey2 from "../../images/bondit/user-journey-2.png"
import ia from "../../images/bondit/info-architecture.png"
import ad2 from "../../images/bondit/theme-two-ad.png"
import q2 from "../../images/bondit/theme-two-ad.png"
import ad3 from "../../images/bondit/theme-three-s1-ad.png"
import q3 from "../../images/bondit/theme-three-s1-quotes.png"
import ad4 from "../../images/bondit/theme-three-s2-ad.png"
import q4 from "../../images/bondit/theme-three-s2-quotes.png"
import login from "../../images/bondit/login.png"
import board from "../../images/bondit/board.png"

function Bondit() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study">
      <section className="section">
        <ProjectInfo
          chips = {projects[1].chips}
          title = {projects[1].title}
          description = {projects[1].description}
          image={cover}
        />
      </section>
      <section className="section">
        <hr className="project-info__divider" />
        <div className="project-info">
          <div>
            <h6 className="project-info__heading">Role</h6>
            <p className="project-info__text">UX Researcher</p>
          </div>
          <div>
            <h6 className="project-info__heading">Team</h6>
            <p className="project-info__text">
              1 project leader <br />
              1 UX lead <br />
              14 UX researchers
            </p>
          </div>
          <div>
            <h6 className="project-info__heading">Project Type</h6>
            <p className="project-info__text">Client Work</p>
          </div>
          <div>
            <h6 className="project-info__heading">Timeline</h6>
            <p className="project-info__text">Jan 2022 - May 2022</p>
          </div>
        </div>
        <hr className="project-info__divider" />
      </section>
      <div className="case-study-content">
        <section className="section">
          <h5 className="section__heading">OVERVIEW</h5>
          <h3 className="section__title">How can we make Bondit a more effective tool for college students?</h3>
          <p className="section__text">
            Bondit is a location-based social media app for US college students launched in 2020. The app currently has 30,000 users as of 2023. <a className="content-link" href="https://apps.apple.com/us/app/bondit-college-calendar/id1523289377" target="_blank">You can check out the app here!</a> <br /> <br />
            
            Bondit aims to promote bonding between college peers through features like shareable course schedule, map, friend discovery feed, and chat. However, the app provided too many features, and the <strong> MAU, DAU, and user retention remained low.</strong>
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Design Challenge</h5>
          <h3 className="section__title">Understanding gen-z trends for bonding to make Bondit more useful and engaging for college students</h3>
          <p className="section__text">
            To solve this design challenge, we investigated the following: what do college students consider when forming new friendships, and how can we use this information to increase Bondit's user retention and acquisition?
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Competitive Analysis</h5>
          <h3 className="section__title">We analyzed ten social media apps targeting college students to understand the role of Bondit within the greater app market</h3>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={ca} alt="competitive analysis" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Empathizing with the Users</h5>
          <h3 className="section__title">
            To understand our users, we conducted over 30 user interviews and 15 cognitive walkthroughs (MIT COUHES approved) 
          </h3>
          <p className="section__text">
            These interviews were conducted on college freshmen and sophomores and covered three major themes: 
          </p>
          <ul>
            <li>Discovering areas of focus</li>
            <li>Examining gen z trends of bonding with peers</li>
            <li>Finding ways Bondit can target latent target users</li>
          </ul>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={ad1} alt="affinity diagram" />
          </div>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={q1} alt="relevant quotes" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Theme One</h5>
          <h3 className="section__title">Discovering Areas of Focus</h3>
          <p className="section__text">
            To understand our areas of focus, we conducted 10 user interviews about Bondit’s current prototype to identify their pain points. We then performed open coding and created an affinity diagram to identify key takeaways.         
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Key Takeaways</h5>
          <h3 className="section__title">
            What are users’ pain points with Bondit’s current prototype?
          </h3>
          <div className="insight-wrapper section__img">
            <Insight
              title="Long login"
              text="Long login process frustrating to users"
            />
            <Insight
              title="Privacy concerns"
              text="Privacy concern over location sharing in map feature"
            />
            <Insight
              title="Lack of Focus"
              text="Unclear app identity due to overwhelming number of features"
            />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">User Persona</h5>
          <h3 className="section__title">
            We designed Jennifer and Raj, potential Bondit user
          </h3>
          <p className="section__text">
            Jennifer and Raj have different goals for using Bondit. While Jennifer wants to use Bondit to socialize and make new friends, Raj wants to use Bondit to seek academic opportunities. These users have been inspired by students at NYU and UC Berkeley, colleges most team members were from.
          </p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={persona1} alt="user persona (Jennifer)" />
          </div>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={persona2} alt="user persona (Raj)" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">User Journey</h5>
          <h3 className="section__title">How would Jennifer and Raj use Bondit?</h3>
          <p className="section__text">
            We created user journeys based on Jennifer and Raj to showcase how Bondit may be used to achieve different goals. While Jennifer uses Bondit to socialize, Raj uses Bondit for academic opportunities. Jennifer'skey features were map and chat while Raj'skey features were course scheduling, chat, and professor ratings.        
          </p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={journey1} alt="user journey (Jennifer)" />
          </div>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={journey2} alt="user journey (Raj)" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Information Architecture</h5>
          <h3 className="section__title">Information architecture for key features</h3>
          <p className="section__text">
            Finally, to determine potential areas of focus and optimize the flow of the app, we created an information architecture based on Bondit'skey features: 
          </p>
          <ul>
            <li>course schedule</li>
            <li>map</li>
            <li>profile</li>
            <li>chat</li>
            <li>professor rating</li>
          </ul>
          <p>
            Through this, we were able to find a minor bug where friend'sprofiles did not appear in the profile tab when filtered by peer, which could have led to frustration and reduced engagement. 
          </p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={ia} alt="information architecture" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Theme Two</h5>
          <h3 className="section__title">Examining Gen Z Trends of Bonding with Peers</h3>
          <p className="section__text">
            We conducted 7 more interviews to understand Gen Z trends of bonding with peers with a focus on social media. We again performed open coding and created an affinity diagram to identify key takeaways. 
          </p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={ad2} alt="affinity diagram" />
          </div>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={q2} alt="relevant quotes" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Key Takeaways</h5>
          <h3 className="section__title">What are Gen Z trends of bonding with peers on social media?</h3>
          <div className="insight-wrapper section__img">
            <Insight
              title="FOMO"
              text="Users use apps friends use due to the feeling of missing out"
            />
            <Insight
              title="Staying updated"
              text="Users like to see what their friends are doing, but can be sensitive about their own privacy"
            />
            <Insight
              title="Personal connections"
              text="Users are aware of the limitations of social media and want to connect with others at a more personal level through features like DM"
            />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Theme Three</h5>
          <h3 className="section__title">Finding ways Bondit can target latent user needs</h3>
          <p className="section__text">We explored this theme through two studies:</p>
          <ul>
            <li>Study one: examining pain points and behaviors related to social bonding</li>
            <li>Study two: examining users' experience with Bondit</li>
          </ul>
        </section>
        <section className="section">
          <h5 className="section__heading">Study One</h5>
          <h3 className="section__title">Examining pain points and behaviors related to social bonding</h3>
          <p className="section__text"> <strong>Objectives</strong></p>
          <ul>
            <li>Understanding pain points and needs in regards to college bonding</li>
            <li>Identifying social media apps that Gen-Z college students use for college bonding and why they use the apps</li>
            <li>Identifying the pain points and needs in regards to the social media apps they use for college bonding</li>
          </ul>
          <p>We examined this by interviewing 10 students.</p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={ad3} alt="affinity diagram" />
          </div>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={q3} alt="relevant quotes" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Key Takeaways</h5>
          <h3 className="section__title">What are Gen Z students' pain points and behaviors related to social bonding?</h3>
          <div className="insight-wrapper section__img">
            <Insight
              title="Pain points"
              text="Time commitment and different backgrounds most frequently mentioned as pain points for bonding"
            />
            <Insight
              title="Social media use"
              text="Gen Z students most frequently use features like story and DM"
            />
            <Insight
              title="Bonding factors"
              text="Similar interests are considered the most important for bonding, even over things like age and major"
            />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Study Two</h5>
          <h3 className="section__title">Examining users' experience with Bondit</h3>
          <p className="section__text">
            Based on past research and insights, the UX lead has made changes to Bondit's design. We wanted to examine users' experience with the new prototype.<br /><br />

            <strong>Objectives</strong>
          </p>
          <ul>
            <li>Understanding user behavior and needs in regards to the onboarding feature of social media apps for college bonding</li>
            <li>Understanding user behavior and needs in regards to identifying college peers to bond with within social media apps for college bonding</li>
            <li>Understanding user behavior and needs in regards to interacting with college peers to bond with within social media apps for college bonding</li>
          </ul>
          <p>We conducted cognitive walkthroughs on 15 participants.</p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={ad4} alt="affinity diagram" />
          </div>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={q4} alt="relevant quotes" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Key Takeaways</h5>
          <h3 className="section__title">What are users" experience with the updated Bondit prototype?</h3>
          <div className="insight-wrapper section__img">
            <Insight
              title="Long login"
              text="Bondit's login process is still too long and has minor issues"
            />
            <Insight
              title="Privacy concerns"
              text="Continued dislike and concern over location sharing in map feature"
            />
            <Insight
              title="Potential features"
              text="Various suggestions for board features including filters, rank system"
            />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Final Design</h5>
          <h3 className="section__title">Final Design</h3>
          <p className="section__text">
            Based on these user insights, we brainstormed changes to Bondit's design. <br /> <br />

            Majors changes included the <strong> streamlining of login process to increase user acquisition and the creation of community board to increase user retention </strong>. 
          </p>
          <div className="section__img">
            <h4 className = "section__title--small">Login redesign</h4>
            <p>
              We improved the login flow by making the profile photo optional and adding username to help students find their friends more easily. We also made college verification optional in the login stage; students can access limited features without verification and upload verification later on to unlock all features.  
            </p>
            <div className="img-wrapper section__img">
              <LazyLoadImage className="img" src={login} alt="new login" />
            </div>
          </div>
          <div className="section__img">
            <h4 className = "section__title--small">New community board</h4>
            <p>
              Community board has been added to enable users to find fun events and join discussions with other students. This board can facilitate interactions between students and allow them to share information and connect, which could help them bond and feel more engaged with their college community.
            </p>
            <div className="img-wrapper section__img">
              <LazyLoadImage className="img" src={board} alt="new community board" />
            </div>
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Reflection</h5>
          <h3 className="section__title">Outcome</h3>
          <p className="section__text">
            We successfully conducted four rounds of user research and began designing improved features. Our work will be transferred to Bondit'ssummer team, who will make further modifications and implement the designs before the start of the fall 2022 semester.
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Reflection</h5>
          <h3 className="section__title">Reflection & Takeaways</h3>
          <p className="section__text">
              This internship has been a valuable opportunity for me. It was my first time working in a UX team, and I got to work with the UX lead and the founder of the company. Designing for a real app with an active user base was an exciting challenge, and it was rewarding to see that my designs had an impact on real users. During this internship, I learned many new UX methods that I am excited to use in future projects. <br /> <br />

              Here are some of my takeaways:
              <br /> <br />
              <strong>Design is not just about the visuals </strong> <br />
              Prior to this internship, I had the impression that design was about creating pixel-perfect, visually appealing graphics. However, conducting user interviews and learning about users" pain points made me realize that user research and design play hand in hand in creating great designs. <br /> <br />

              <strong>Discussions spark creativity </strong> <br />
              Our team regularly held discussions to explore solutions based on user insights, and our ideas sometimes differed. However, these conversations taught me that exchanging perspectives can lead to stronger and more creative ideas. <br /> <br />

              <strong>First-hand experience can guide the research </strong> <br />
              As a college freshman, I fit the app'starget audience perfectly. The PM and founder often asked for my thoughts on the user experience, and I noticed that many users" paint points aligned with mine. This connection helped me empathize with the users during interviews.
          </p>
        </section>
        <section className="section">
          <MoreProjects
            title={projects[2].title}
            link={projects[2].link}
          />
        </section>
      </div>
    </div>
  )
}

export default Bondit