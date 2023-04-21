import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"

function Home() {
  return (
    <div className='home' data-testid="home-page">
       <div className="about">
        <h2>Hi, My Name is Garrett</h2>
        <div className="prompt">
            <p>A software developer with a passion for learning and creating</p>
            <a href="https://www.linkedin.com/in/garrett-waters-7953a2220/" target="_blank" title="LinkedIn"><LinkedInIcon/></a>
            <a href="https://drive.google.com/file/d/16p_Q0xVAUM8wmK4EGbAefk0QB83EreHg/view?usp=sharing" target="_blank" title='Resume'><EmailIcon/></a>
            <a href="https://github.com/GarrettWat" target="_blank" title='Github'><GithubIcon/></a>
        </div>
       </div>
        <div className='aboutMe'>
          <h1>About Me</h1>
          <p><strong>Greetings! Here's a little bit about me.</strong></p>
          <p>I wrote my first line of code 5 years ago Sophomore year
              of high school. I was instantly hooked. I loved how I could
              create something from nothing, and I could make it exactly how
              I wanted it to be. I started learning Python, then branched out
              into front end technologies, starting with HTML and CSS. I then 
              learned JavaScript.
          </p>
        </div>
       <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
        <li className='item'>
            <h2>Programming Languages</h2>
            <span>JavaScript, TypeScript, HTML, CSS, Python</span>
        </li>
        <li className='item'>
            <h2>Technologies</h2>
            <span>React, Tailwind CSS, Redux, Next JS, Bootstrap, Git, VSCode, NPM, a11y, Netlify</span>
        </li>
        <li className='item'>
            <h2>Prototyping</h2>
            <span>Figma, Gimp</span>
        </li>
        </ol>
       </div>
    </div>
  )
}

export default Home