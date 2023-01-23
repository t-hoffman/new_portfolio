import React from 'react'
import '../css/Home.css'

const Home = () => {
  return (
    <>
    <div className="main-cont">
      <div className="main-left"></div>
      <div className="main-right">
        <h2>TYLER HOFFMAN</h2>
        <h3>SOFTWARE ENGINEER</h3>
        <div className="main-text">
          Creative software engineer based in <b>West Hollywood</b> <span style={{fontSize:'16pt'}}>☀️</span> who discovered my passion for development at the young age of 12.<br /><br />
          My success as a freelancer in my early teens solidified my love for problem-solving and self-motivated learning.<br /><br />
          I am now seeking to <span style={{fontSize:'16pt'}}>🚀</span> launch my career as a software developer and take it to new heights.
          {/* Creative software engineer based in <b>West Hollywood</b> <span style={{fontSize:'16pt'}}>☀️</span> that found my passion for development when I was just 12 years old.<br /><br />
          Becoming a successful freelancer when I was in my early teens revealed my infatuation for problem solving and deep appreciation of self motivated learning.<br /><br />
          Looking to <span style={{fontSize:'16pt'}}>🚀</span> launch my career as a software developer. */}
        </div>
      </div>
    </div>
    <div className="socials">
      <a href="https://www.github.com/t-hoffman" target="_blank" rel="noreferrer" className="github"><i className="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/tyler-hoffman" target="_blank" rel="noreferrer" className="linked"><i className="fa-brands fa-linkedin"></i></a>
      <a href="https://www.facebook.com/teehoff/" target="_blank" rel="noreferrer" className="fb"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/teehoff/" target="_blank" rel="noreferrer" className="ig"><i className="fa-brands fa-instagram"></i></a>
      <a href="https://twitter.com/_tylerhoffman" target="_blank" rel="noreferrer" className="twitter"><i className="fa-brands fa-twitter"></i></a>
    </div>
    <div className="email-link">
      <a href="mailto:teehoff@icloud.com">teehoff@icloud.com</a>
    </div>
    <div className="construction">
      <div className="construction-box">
        {/* <span style={{fontSize:'16pt'}}>🚧</span>  */}Website under construction
      </div>
    </div>
    </>
  )
}

export default Home
