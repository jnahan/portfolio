import React from "react"
import selfie from "../../images/about/selfie.png"
import pets from "../../images/about/pets.png"

function About() {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="about section">
            <section>
                <h2 className="about__heading--1">
                    Hi, I'm Jenna <span className="wave">👋</span>
                </h2>
                <p className="about__text">
                    You can call me Jenna or Ju Hee! I’m a product designer based in New York City and I love creating things with design and code! I’m currently pursuing a bachelor’s degree in Interactive Media Arts and Computer Science at New York University. I aim to create intuitive designs that put the users’ needs first. <br /> <br />
                    <a className="content-link" target="_blank" rel="noopener" href="mailto: jh7765@nyu.edu">Email</a> <br />
                    <a className="content-link" target="_blank" rel="noopener" href="https://drive.google.com/file/d/1G5OY5Cf2xfemzcIwh7Q0Fgwz_LGnk693/view?usp=sharing">Resume</a>
                </p>
                <h3 className="about__heading--3">How it all started...</h3>
                <p className="about__text">I’ve always struggled to find my “one-true passion.” Growing up, I enjoyed both art and science and felt pressured to choose one or the other. This was until I discovered how seamlessly you can combine design and code. I fell in love with how code could make my static visual works come to life!</p>
                <h3 className="about__heading--3">Combining design and code</h3>
                <p className="about__text">Combining design and code allows me to exercise both the creative and logical sides of my brain. I can break down complex problems into logical and intuitive steps, refine the design to make it beautiful, and add interactivity and functionality to it through code. While my primary focus is design, I believe my experience researching, designing, and building products from start to finish gives me the ability to bridge the gap between users, designers, and engineers.</p>
                <h3 className="about__heading--3">Some fun facts about me!</h3>
                <ul>
                    <li>I lived in 3 different countries (Korea, Japan, USA), including four different states within the US (MA, CA, NJ, NY)</li>
                    <li>I have two dogs and a cat! Their names are Midory, Mickey, and Azerail</li>
                    <li>My latest hobby is cooking. My favorite dish I made so far is katsu curry</li>
                    <li>I also like makeup, painting, crocheting, and shopping</li>
                </ul>
            </section>
            <section className="about-card-wrapper">
                <div className="about-card">
                    <img className="about-card__img" src={selfie} alt="" />
                    <p>Me!</p>
                </div>
                <div className="about-card">
                    <img className="about-card__img" src={pets} alt="" />
                    <p>My pets :)</p>
                </div>
            </section>
        </div>
    )
}

export default About