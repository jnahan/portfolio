import React from "react"

function Footer() {
  return (
    <footer className="footer section">
      <p>Designed & coded with 💓 and 🧋</p>
      <ul className="footer__menu">
        <li className="footer__item">
          <a target="_blank" rel="noopener" href="mailto: jh7765@nyu.edu">Email</a>
        </li>
        <li className="footer__item">
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/jenna-juhee-han">LinkedIn</a></li>
        <li className="footer__item">
          <a target="_blank" rel="noopener" href="https://github.com/jnahan">GitHub</a>
        </li>
        <li className="footer__item">
          <a target="_blank" rel="noopener" href="https://drive.google.com/file/d/1G5OY5Cf2xfemzcIwh7Q0Fgwz_LGnk693/view?usp=sharing">Resume</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer