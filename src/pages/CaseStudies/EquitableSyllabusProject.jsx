import React from 'react'
import { projects } from '../../data/projectData'
import ProjectInfo from './ProjectTitle'
import Insight from './Insight'

import cover from '../../images/esp/esp-cover-image.png'
import old1 from '../../images/esp/old-landing.png'
import old2 from '../../images/esp/old-database.png'
import old3 from '../../images/esp/old-design-1.png'
import old4 from '../../images/esp/old-design-2.png'
import ad from '../../images/esp/affinity-diagram.png'
import siteMap from '../../images/esp/site-map.png'
import final1 from '../../images/esp/landing-page.png'
import final2 from '../../images/esp/syllabus-guide.png'
import final3 from '../../images/esp/research-database.png'

function EquitableSyllabusProject() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='case-study'>
      <section className="section">
      <ProjectInfo
        chips = {projects[3].chips}
        title = {projects[3].title}
        description = {projects[3].description}
        image = {cover}
      />
      </section>
        <section className="section">
        <hr className='project-info__divider' />
        <div className='project-info'>
          <div>
            <h6 className='project-info__heading'>Role</h6>
            <p className='project-info__text'>
              UI/UX Designer <br />
              Developer
            </p>
          </div>
          <div>
            <h6 className='project-info__heading'>Team</h6>
            <p className='project-info__text'>Equitable Working Group (NYU)</p>
          </div>
          <div>
            <h6 className='project-info__heading'>Project Type</h6>
            <p className='project-info__text'>Client Work</p>
          </div>
          <div>
            <h6 className='project-info__heading'>Timeline</h6>
            <p className='project-info__text'>Dec 2022 - Jun 2022</p>
          </div>
        </div>
       <hr className='project-info__divider' />
      </section>
      <div className="case-study-content">
      <section className="section">
        <div>
          <h5 className='section__name'>Overview</h5>
          <h3 className='section__title'>Helping professors create an equitable syllabus</h3>
        </div>
        <p className='section__text'>
        The Equitable Syllabus Project at NYU’s ITP (Interactive Telecommunications Program) department provides resources to help faculty create inclusive and equitable syllabi. These resources include research service, syllabus guide, syllabus workshop, and curated database of resources representing minority groups. <br /> <br />
        However, the lack of centralized access point for these resources made them difficult to utilize. Additionally, the database was on Google sheets, which made it difficult for faculty to find the information they needed. <strong>To solve this problem, I designed the Equitable Syllabus Project website to help professors take advantage of these tools and create a syllabus that can foster a more inclusive learning environment.</strong>  <br /> <br />
        During my time at Equitable Syllabus Project team, I designed two iterations of the Equitable Syllabus Project website. The first version of the site has been designed with Figma and implemented with Wordpress. This case study focuses on the UX research and design of the second iteration of the website, which has been designed on Figma and developed with React.
        </p>
      </section>
      <section className="section">
        <h5 className='section__name'>Design Challenge</h5>
        <h3 className='section__title'>How might we present Equitable Syllabus Project’s resources to make them more useful and accessible to NYU professors?</h3>
      </section>
      <section className="section">
        <h5 className='section__name'>Project Background</h5>
        <h3 className='section__title'>Project Background</h3>
        <p className='section__text'>
        When I first joined the Equitable Syllabus Project team, the project manager informed me that creating a website for the project was a task that had been started but never completed. The team had conducted user interviews and designed few of the website screens. My task was to redesign the website and develop it. <br /> <br />

       <strong>Originally, information about Equitable Syllabus Project’s resources were scattered across many platforms:</strong> <br />
        </p>
        <ul>
          <li>Project information website → WordPress blog</li>
          <li>Research service → application form on Google Forms, sent out over email</li>
          <li>Syllabus guide → document on Google Docs</li>
          <li>Syllabus workshop → information sent out over email</li>
          <li>Curated database of resources → Google Sheets</li>
        </ul>
        <div className='section__img'>
          <h4 className = 'section__heading--small'>Original database and information website</h4>
          <div className="col">
              <div className="img-wrapper">
                <img className='img' src={old1} alt="" />
              </div>
              <div className="img-wrapper">  
                <img className='img' src={old2} alt="" />
              </div>
          </div>
        </div>
        <div className='section__img'>
          <h4 className = 'section__heading--small'>Old designs from project manager</h4>
          <div className="col">
              <div className="img-wrapper">
                <img className='img' src={old3} alt="" />
              </div>
              <div className="img-wrapper">  
                <img className='img' src={old4} alt="" />
              </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h5 className='section__name'>User Research</h5>
        <h3 className='section__title'>Understanding ITP professors' needs</h3>
        <p className='section__text'>
        Our website targets NYU ITP faculties. To understand their needs, I analyzed 13 faculty interviews and organized relevant quotes using an affinity diagram to identify patterns.
        </p>
        <ul>
          <li>Learn more about professor’s pain points when finding resources to include in their syllabi</li>
          <li>Gain insight on what features would be helpful for professors in the database</li>
        </ul>
        <div className="img-wrapper section__img">
            <img className='img' src={ad} alt="" />
        </div>
      </section>
      <section className="section">
        <h5 className='section__name'>INSIGHTS</h5>
        <h3 className='section__title'>User research insights</h3>
        <p className='section__text'>
        After conducting user research and analyzing the current organization of Equitable Syllabus Project’s resources, I identified major themes reflecting user pain points to guide the website design.        </p>
        <div className="insight-wrapper section__img">
          <Insight
            title="Resources are too scattered"
            text="The resources provided by the Equitable Syllabus team are difficult to access because they are on too many different platform."
          />
          <Insight
            title="Traditional search is limiting"
            text="As ITP covers non-verbal fields, it can be difficult to know what to search for. Searching also keeps you constrained to topics you already know."
          />
        </div>
        <div className='insight-wrapper section__img'>
          <Insight
            title="Resources from minority groups"
            text="A lot of the resources that are widely available are created by white men. It can be difficult to find works from minority creators."
          />
          <Insight
            title="Community Voices"
            text="Users want engagement and contributions from other community members in order to incorporate diverse voices."
          />
        </div>
      </section>
      <section className="section">
        <h5 className='section__name'>Site Map</h5>
        <h3 className='section__title'>Site Map</h3>
        <p className='section__text'>
        The website includes pages for each of the resource provided by the Equitable Syllabus team, as well as a contribution site to voice ideas and resource suggestions. Users can learn about each of these resources on the home page.        </p>
        <div className="img-wrapper section__img">
            <img className='img' src={siteMap} alt="" />
        </div>
      </section>
      <section className="section">
        <h5 className='section__name'>Design to Development</h5>
        <h3 className='section__title'>From Figma to React</h3>
        <p className='section__text'>
        I created the designs on Figma and constantly reiterated them based on feedback from team members and ITP faculty. Figma components and styles were used to streamline development. <br /> <br />
        The final designs were developed using React. Because the research database was already on Google Sheets, I used SheetsDB API, which enabled me to fetch data from Google Sheets. This choice also enabled Equitable Syllabus Project researchers to update the research database easily.
        </p>
      </section>
      <section className="section">
        <h5 className='section__heading'>Result</h5>
        <h3 className='section__title'>
        Final Website
        </h3>
        <p className='section__text'>The Equitable Syllabus Project site is now live on the NYU ITP domain! These are a few of the key screens:</p>
      </section>
      <section className="section">
      <div className='col col--gap'>
          <div className="img-wrapper col-large">
            <img className='img shadow' src={final1} alt="" />
          </div>
          <div className='col-small'>
            <h4 className="section__title--small">Landing Page</h4>
            <ul>
            <li>Learn the benefits of having an equitable syllabus</li>
            <li>Find out what resources the team provides to help professors create a more equitable syllabus</li>
            <li>Read how our team helped other professors</li>
          </ul>
          </div>
        </div>
      </section>
      <section className="section">
      <div className='col col--gap'>
          <div className='col-small'>
            <h4 className="section__title--small">Syllabus Guide</h4>
            <ul>
            <li>Get tips and guidelines for creating a more equitable syllabus</li>
            <li>Propose changes and get your voice heard</li>
          </ul>
          </div>
          <div className="img-wrapper col-large">
            <img className='img shadow' src={final2} alt="" />
          </div>
        </div>
      </section>
      <section className="section">
      <div className='col col--gap'>
          <div className="img-wrapper col-large">
            <img className='img shadow' src={final3} alt="" />
          </div>
          <div className='col-small'>
            <h4 className="section__title--small">Research Database</h4>
            <ul>
            <li>Collection of resources from underrepresented minorities</li>
            <li>Filter based on format, continent, and category to find resources that are helpful to you</li>
          </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <h5 className='section__name'>REFLECTION</h5>
        <h3 className='section__title'>Reflection and Takeaways</h3>
        <p className='section__text'>
          This project was challenging as it was my first time working as a sole designer and developer within a team. I learned how to collaborate with team members of varying technical backgrounds and seek help when needed. I feel really proud of myself for handling this product end-to-end and am excited for professors to use it! <br /> <br />

          I had some important takeaways from completing this project: <br /> <br />

         <strong>You need to consider technical and time limitations when designing </strong> <br />
          Many professors mentioned wanting to browse recommended resources in the database instead of searching traditionally. Although we could potentially achieve this through training a ML model or finding related resources for each database entry, both options were too time consuming. As a compromise, I decided to implement a scrollable database rather than a traditional search bar to help professors explore new resources. This experience made me realize that some solutions can’t be implemented due to limitations and that you sometimes have to find alternative solutions to problems. <br /> <br />
          <strong>The right design can speed up development</strong>  <br /> 
          I utilized grids, components, auto layouts, and styles while creating my designs on Figma. Using these tools not only helped me maintain consistency, but also sped up the development process immensely. Figma components were especially helpful as they worked similarly to how components work in React. As I could transform the designs into code more seamlessly, I was also able to code the website in a cleaner, more efficient way.
        </p>
      </section>
    </div>
    </div>
  )
}

export default EquitableSyllabusProject