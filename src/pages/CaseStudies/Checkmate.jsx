import React from "react"
import { projects } from "../../data/projectData"
import { LazyLoadImage } from "react-lazy-load-image-component";

import ProjectInfo from "./ProjectTitle"
import MoreProjects from "./MoreProjects";

import cover from "../../images/checkmate/checkmate-cover-image.png"
import final1 from "../../images/checkmate/final-design-1.png"
import final2 from "../../images/checkmate/final-design-2.png"
import final3 from "../../images/checkmate/final-design-3.png"
import process from "../../images/checkmate/design-thinking.png"
import ca from "../../images/checkmate/competitive-analysis.png"
import qr1 from "../../images/checkmate/quantitative-research-1.png"
import qr2 from "../../images/checkmate/quantitative-research-2.png"
import ri1 from "../../images/checkmate/insight-1.png"
import ri2 from "../../images/checkmate/insight-2.png"
import persona from "../../images/checkmate/user-persona.png"
import journey from "../../images/checkmate/user-journey.png"
import flow from "../../images/checkmate/user-flow-diagram.png"
import utSteps from "../../images/checkmate/user-testing.png"
import ut1 from "../../images/checkmate/user-testing-1.png"
import ut2 from "../../images/checkmate/user-testing-2.png"
import ut3 from "../../images/checkmate/user-testing-3.png"
import ut4 from "../../images/checkmate/user-testing-4.png"


function Checkmate() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study">
      <section className="section">
        <ProjectInfo
          chips={projects[0].chips}
          title={projects[0].title}
          description={projects[0].description}
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
            <p className="project-info__text">Personal Project</p>
          </div>
          <div>
            <h6 className="project-info__heading">Timeline</h6>
            <p className="project-info__text">Mar 2023 - Jun 2023</p>
          </div>
        </div>
        <hr className="project-info__divider" />
      </section>
      <div className="case-study-content">
        <section className="section">
          <h5 className="section__heading">OVERVIEW</h5>
          <h3 className="section__title">Students struggle to reach their personal goals</h3>
          <p className="section__text">
            I frequently see my friends diligently working on their assignments and achieving their academic goals. However, I also see the same friends (and myself) <strong> pushing back personal goals </strong> like going to the gym, cooking more often, or spending less money. <br /><br />
          
            <strong> Why do students face such a big disparity between their ability to reach personal goals and academic goals? </strong>
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">DESIGN CHALLENGE</h5>
          <h3 className="section__title">
            How might we enforce social and structural accountability to help students reach their personal goals as effectively as academic goals?
          </h3>
        </section>
        <section className="section">
          <h5 className="section__heading">Solution</h5>
          <h3 className="section__title">
            Meet CheckMate, a habit tracker that enforces pressure and accountability to help students reach their personal goals
          </h3>
        </section>
        <section className="section">
        <div className="col col--gap">
            <div className="img-wrapper col-large">
              <LazyLoadImage className="img" src={final1} alt="challenge" />
            </div>
            <div className="col-small">
              <h4 className="section__title--small">Set goals and get held accountable</h4>
              <ul>
                <li>Customized feed of challenges based on your goals and experience</li>
                <li>Snap a photo of you working on your goal by a set deadline as proof of completion</li>
                <li>Your proof of completion will be visible to others working on the same challenge</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="col col--gap">
            <div className="col-small">
              <h4 className="section__title--small">Bet money on yourself and earn monetary prizes</h4>
              <ul>
                <li>It’s like a swear jar!</li>
                <li>Deposit money. You’ll earn a prize if you complete your goal and lose a part of your deposit if you fail</li>
                <li>Redeem prize money for fun gift cards</li>
              </ul>
            </div>
            <div className="img-wrapper col-large">
              <LazyLoadImage className="img" src={final2} alt="prizes" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="col col--gap">
            <div className="img-wrapper col-large">
              <LazyLoadImage className="img" src={final3} alt="community" />
            </div>
            <div className="col-small">
              <h4 className="section__title--small">Join the community and spread support</h4>
              <ul>
                <li>View other goal-getters’ proof of completion and hold them accountable</li>
                <li>Send support with reactions</li>
                <li>Track your progress compared to other group members</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">DESIGN PROCESS</h5>
          <h3 className="section__title">I used the design thinking process to make sure my design decisions align with user needs</h3>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={process} alt="design thinking process" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">INITIAL RESEARCH</h5>
          <h3 className="section__title">Accountability partners increase your chance of reaching your goal to 95%</h3>
          <p className="section__text">
            According to <a className="content-link" href="https://www.forbes.com/sites/forbescoachescouncil/2018/08/14/three-steps-to-overcoming-resistance/?sh=271ca33a5eae" target="_blank" rel="noopener"> The American Society of Training and Development</a>, “People are <strong> 65 percent </strong> likely to meet a goal after committing to another person. Their chances of success increase to <strong> 95 percent </strong> when they build in ongoing meetings with their partners to check in on their progress.” <br /><br />

            This statistics actually reflected my own experience with accountability partners! I previously had a system with my friend where we would share our to-do lists and Venmo each other $1 every time we failed to complete a task. This system was extremely effective in helping me complete not only my academic goals, but also the personal goals I used to push aside. This got me thinking, what if I create an app to help users connect with accountability partners? 
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Competitive Analysis</h5>
          <h3 className="section__title">There are no consequences to not completing a goal in competing apps</h3>
          <p className="section__text">
            I analyzed three of the most popular productivity apps on App Store--Habit tracker, Productive, and Done--and found that none of these apps held their users accountable for not completing their goals. The lack of accountability could be bad for long-term goals as it can lead to users lacking motivation and procrastinating, and therefore failing to ever reach their goals.
          </p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={ca} alt="competitive analysis" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Quantitative Research</h5>
          <h3 className="section__title">However, I ran into a roadblock as I found out that most students actually prefer to keep their goals private </h3>
          <p className="section__text">
            I conducted a survey examining students’ experience with goal-setting and accountability partners and received 14 responses. Unfortunately, I found out that most students actually prefer to keep their goals private from others. 
          </p>
          <div className="col img-wrapper section__img">
            <div>
                <LazyLoadImage className="img" src={qr1} alt="quantiative research" />
            </div>
            <div>
                <LazyLoadImage className="img" src={qr2} alt="quantiative research" />
            </div>
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">User Interviews</h5>
          <h3 className="section__title">In order to find a different way of enforcing accountability, I conducted user interviews with 5 college students</h3>
          <p className="section__text">
            Sample questions:
          </p>
          <ul>
            <li>Tell me about a goal you accomplished.</li>
            <li>What difficulty did you face while trying to achieve it?</li>
            <li>Do you have someone you share your goals with?</li>
            <li>Do you use any tools or platforms to manage your tasks and goals?</li>
            <li>Do you approach non-academic goals differently from your academic goals?</li>
          </ul>
        </section>
        <section className="section">
          <h5 className="section__heading">Insight 1</h5>
          <h3 className="section__title">Most people prefer to keep their goals private from their peers and are unable to benefit from accountability partners</h3>
          <div className="img-wrapper section__img">
              <LazyLoadImage className="img" src={ri1} alt="insight 1 quotes" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Insight 2</h5>
          <h3 className="section__title">People are more likely to accomplish their goals if there is are enforced structures and consequences</h3>
          <div className="img-wrapper section__img">
              <LazyLoadImage className="img" src={ri2} alt="insight 2 quotes" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">User Persona</h5>
          <h3 className="section__title">Based on user research, I designed Sophia, the average motivated but overwhelmed college student</h3>
          <div className="img-wrapper section__img">
              <LazyLoadImage className="img" src={persona} alt="user persona" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">User Journey</h5>
          <h3 className="section__title">Although Sophia tries her best to work on her goals, she often loses motivation and gives up halfway</h3>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={journey} alt="user journey" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">Problem Statement</h5>
          <h3 className="section__title">
            Problem Statement
          </h3>
          <p className="section__text">
            Many college students have personal goals they want to achieve. However, although academic goals provide students the pressure and hard deadlines that make achieving goals easier, the lack of discipline and accountability that personal goals provide lead to students procrastinating and failing to reach their goals.
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Solution</h5>
          <h3 className="section__title">What if we made personal goals more like schoolwork?</h3>
          <p className="section__text">
            Both the survey and interview results showed me that students prefer to keep their goals private due to shame, embarrassment, or lack of friends with common goals. This result, unfortunately, went against my original plan of creating an app allowing friends to share their goals with accountability partners. <br /> <br />
            However, I was able to find the reason why students are so much more successful at accomplishing their academic goals than personal goals: schoolwork has a structure that rewards and punishes students based on their performance. <br /> <br />
            This realization sparked an idea: what if we made personal goals more like schoolwork by enforcing performance evaluations, prizes, and punishments?        
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">User Flow Diagram</h5>
          <h3 className="section__title">
            I broke down the system into three stages: joining a challenge, uploading proof of completion, and earning rewards
          </h3>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={flow} alt="user flow diagram" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">User Testing</h5>
          <h3 className="section__title">
          I conducted user testing with five college students to test this idea
          </h3>
          <p className="section__text">
            This test was conducted using a Figma prototype. I designed wireframes with minimal styling to help students focus on the concept and flow of the app.        
          </p>
          <div className="img-wrapper section__img">
            <LazyLoadImage className="img" src={utSteps} alt="user testing steps" />
          </div>
        </section>
        <section className="section">
          <h5 className="section__heading">User Testing Results and Improvements</h5>
          <h3 className="section__title">Improvements based on user testing</h3>
          <p className="section__text">
            I was happy to see that the testers were able to navigate and understand the app quite easily. In fact, most of the testers said that they love the prize/reward system and would use the app if it actually existed!
            <br /> <br />

            As there were still some minor confusion and concerns, I made some changes based on feedback:     
          </p>
        </section>
        <section className="section">
          <div className="col col--gap">
            <div>
              <h4 className="section__title--small">Onboarding Survey</h4>
              <ul>
                <li>One of the testers had a hard time finding the specified challenge</li>
                <li>I added an onboarding survey to ensure that the challenge feed is catered towards each user</li>
              </ul>
            </div>
            <div className="img-wrapper">
              <LazyLoadImage className="img" src={ut1} alt="onboarding survey" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="col col--gap">
            <div className="img-wrapper col-large">
              <LazyLoadImage className="img" src={ut2} alt="rules and prizes" />
            </div>
            <div className="col-small">
              <h4 className="section__title--small">Clarified Rules and Prize System</h4>
              <ul>
                <li>Although most users enjoyed the concept of betting money on themselves, they were initially shocked that they had to pay money to join a challenge</li>
                <li>I clarified the challenge rules and added a checkbox to ensure users agreed to them</li>
                <li>I outlined how much prize and refund you can get based on your performance and explained why betting money is beneficial</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="col col--gap">
            <div className="col-small">
              <h4 className="section__title--small">Cover Up Stickers</h4>
              <ul>
                <li>A few users were concerned about their photo being public as their images could contain private information</li>
                <li>However, I wanted to keep images public to enforce social accountability and verify that the users are uploading valid proof</li>
                <li>I decided to add stickers so users could hide sensitive information</li>
              </ul>
            </div>
            <div className="img-wrapper col-large">
              <LazyLoadImage className="img" src={ut3} alt="cover up stickers" />
            </div>
          </div>   
        </section>
        <section className="section">
          <div className="col col--gap">
            <div className="img-wrapper col-large">
              <LazyLoadImage className="img" src={ut4} alt="challenge groups" />
            </div>
            <div className="col-small">
              <h4 className="section__title--small">Small Challenge Groups</h4>
              <ul>
                <li>I received feedback that there would be less social accountability if the challenge groups were too large</li>
                <li>I limited each challenge group to 30 members</li>
                <li>The group also creates an environment people can engage and support each other in</li>
                <li>Users can optionally maintain their anonymity with usernames</li>
              </ul>
            </div>
          </div>   
        </section>
        <section className="section">
          <h5 className="section__heading">Potential Changes</h5>
          <h3 className="section__title">If I Had More Time...</h3>
          <p className="section__text">
            I had a ton of fun designing Checkmate! If I had more time, I would love to experiment with adding the following features: <br />
          </p>
          <ul>
            <li>Enabling users to add custom challenges</li>
            <li>Statistics to track your progress</li>
            <li>More complex prize system and rewards</li>
          </ul>
        </section>
        <section className="section">
          <h5 className="section__heading">Outcome</h5>
          <h3 className="section__title">Outcome</h3>
          <p className="section__text">
            I presented the idea to some of my classmates and friends and heard amazing feedback. A lot of people said having money as a source of motivation was a great idea, and that they would definitely use the app if it actually existed. <br /><br />

            Due to the positive feedback I received, my friend and I are taking the next step of building Checkmate! We are using React Native, MongoDB, Express, and Node.js for the tech stack. We plan to complete the development by December 2023 and test a demo version of our app with a small group of participants. In this study, we will be analyzing two groups attempting to work on a set personal goal for one week. One group will use Checkmate, while the control group will work on the goal without the app. Check out our progress on our <a className="content-link" href="https://github.com/millycakes/final-project" target="_blank" rel="noopener">GitHub repository</a>. We hope to see that Checkmate can help students achieve their personal goals!
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Reflection</h5>
          <h3 className="section__title">Reflection + Takeaways</h3>
          <p className="section__text">
            I really loved working on Checkmate as self-improvement is something I’ve always been interested in.<br /><br />
            
            Through this project I learned some important takeaways: <br /><br />
            <strong>There are unique ways to approach a saturated field </strong> <br />
            I was worried about creating a habit tracker at first as it is one of the most common types of app out there. However, through competitive analysis and user research, I was able to identify a key missing factor of accountability in these apps to create a more unique and effective solution to habit building! <br /> <br />
            <strong>Personal experience is a great way to empathize with your target audience </strong> <br />
            I first got the idea for this app because it was a tool I really wish I had. When interviewing other college students, I could definitely empathize with their problems when it came to balancing your academic and personal goals, and I think this helped me connect with my interviewees and come up with more meaningful insights. <br /> <br />
            <strong>Users approach the same app differently </strong> <br />
            When it comes to user experience design, it’s easy to fall in the trap of designing for an “ideal user”--one that thoroughly read every description and outlines you have. However, during user testing, I learned that users approach the same apps differently. Some fly through the app by scanning the screens while others spend more time thoroughly reading through each description. This made me realize how important it is to user test and maintain a strong visual hierarchy that can guide the users.
          </p>
        </section>
        <section className="section">
          <h5 className="section__heading">Acknowledgement</h5>
          <h3 className="section__title">Project Inspiration</h3>
          <p className="section__text">
            Checkmate was inspired by my past experience with  accountability partners and a project called <span> </span> 
            <a className="content-link" href="https://www.youtube.com/watch?v=YkMVNdBZbc0&t=780s&ab_channel=SharonYeunKim" target="_blank" rel="noopener">Onnit by Sharon Yeun Kim</a>. Although I tackled the problem--the lack of accountability provided by personal goals--differently by enforcing structural accountability and financial consequences instead of social accountability, I was inspired by the way Sharon incorporated clear storytelling to her research and presentation. Thank you to my past accountability partners and Sharon for helping me bring this project come to life!
          </p>
        </section>
        <section className="section">
          <MoreProjects
            title={projects[1].title}
            link={projects[1].link}
          />
        </section>
      </div>
    </div>
  )
}

export default Checkmate