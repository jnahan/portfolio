import React from 'react'

function Footer() {
  return (
    <footer className='footer section'>
      <p>Designed & coded with 💓 and 🧋</p>
      <ul className='footer__menu'>
        <li className='footer__item'>
          <a target='_blank' href="mailto: jenna5376@gmail.com">Email</a>
        </li>
        <li className='footer__item'>
          <a target='_blank' href="https://www.linkedin.com/in/jenna-han-4b09631b7">LinkedIn</a></li>
        <li className='footer__item'>
          <a target='_blank' href="https://github.com/jenna5376">GitHub</a>
        </li>
        <li className='footer__item'>
          <a target='_blank' href="https://drive.google.com/file/d/18_ng2K9TEHkZitPo-8e-OCQ0vHUrsVcA/view?usp=sharing">Resume</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer