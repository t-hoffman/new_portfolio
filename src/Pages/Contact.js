import React from 'react'
import '../css/Contact.css'

const Contact = () => {
  const iconStyle = {
    fontSize: '42pt',
    marginLeft: '15px'
  }

  return (
    <>
    <div>
      <h2>Contact me</h2>
    </div>
    <div className="socials">
      <a href="https://www.github.com/t-hoffman" target="_blank" rel="noreferrer" className="github"><i className="fa-brands fa-github" style={iconStyle}></i></a>
      <a href="https://www.linkedin.com/in/tyler-hoffman" target="_blank" rel="noreferrer" className="linked"><i className="fa-brands fa-linkedin" style={iconStyle}></i></a>
      <a href="https://www.facebook.com/teehoff/" target="_blank" rel="noreferrer" className="fb"><i className="fa-brands fa-facebook-f" style={iconStyle}></i></a>
      <a href="https://www.instagram.com/teehoff/" target="_blank" rel="noreferrer" className="ig"><i className="fa-brands fa-instagram" style={iconStyle}></i></a>
      <a href="https://twitter.com/_tylerhoffman" target="_blank" rel="noreferrer" className="twitter"><i className="fa-brands fa-twitter" style={iconStyle}></i></a>
    </div>
    <div className="phone-section">
      <div style={{fontSize:'22pt'}}><b>(310) 270-5825</b></div>
      <div className="email-link">
        <a href="mailto:teehoff@icloud.com" style={{fontSize:'16pt'}}>teehoff@icloud.com</a>
      </div>
    </div>
    </>
  )
}

export default Contact
