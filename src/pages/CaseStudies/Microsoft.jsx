import React from "react";
import { projects } from "../../data/projectData";

import ProjectInfo from "./ProjectTitle";
import MoreProjects from "./MoreProjects";

import cover from "../../images/microsoft/microsoft-cover-image.png";

function Microsoft() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <p className="project-info__text">UX Engineer</p>
          </div>
          <div>
            <h6 className="project-info__heading">Project Type</h6>
            <p className="project-info__text">Client Work</p>
          </div>
          <div>
            <h6 className="project-info__heading">Timeline</h6>
            <p className="project-info__text">Jun 2024 - Aug 2024</p>
          </div>
        </div>
        <hr className="project-info__divider" />
      </section>
      <div className="case-study-content">
        <section className="section">
          <h5 className="section__heading">Overview</h5>
          <h3 className="section__title">
            Creating tools to help Microsoft designers and engineers work more efficiently
          </h3>
          <p className="section__text">
            During Summer 2024, I got the opportunity to work as a UX Engineer at Microsoft Fabric. Microsoft Fabric is an AI-powered data analytics platform.
            <br /> <br />
            My 3 month long project involved researching, designing, and
            developing various tooling for the Fabric design and engineering teams. This process involved tons of ideation and
            discussions with the project manager, and went through many
            different iterations.
            <br /> <br />
            Although I am unable to disclose specific details about my work,
            please feel free to{" "}
            <a
              className="content-link"
              target="_blank"
              rel="noopener"
              href="mailto: jh7765@nyu.edu"
            >
              reach out
            </a>{" "}
            to me for more details!
          </p>
        </section>
        <section className="section">
          <MoreProjects title={projects[1].title} link={projects[1].link} />
        </section>
      </div>
    </div>
  );
}

export default Microsoft;
