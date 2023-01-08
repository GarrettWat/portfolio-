import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
       <div className="about">
        <h2>Hi, My Name is Garrett</h2>
        <div className="prompt">
            <p>A software developer with a passion for learning and creating</p>
            <a href="https://www.linkedin.com/in/garrett-waters-7953a2220/" target="_blank"><LinkedInIcon/></a>
            <a href="https://drive.google.com/file/d/1hDCfY7hVz9YQmAZvJf4mizhYpqfo0hIp/view" target="_blank"><EmailIcon/></a>
            <a href="https://github.com/GarrettWat" target="_blank"><GithubIcon/></a>
        </div>
       </div>
        <div className='aboutMe'>
          <h1>About Me</h1>
          <p><strong>Greetings! Here's a little bit about me.</strong></p>
          <p>I wrote my first line of code 5 years ago Sophmore year
              of high school. I was instantly hooked. I loved how I could
              create something from nothing, and I could make it exactly how
              I wanted it to be. I started learning Python, then branched out
              into front end technologies.
          </p>
        </div>
       <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
        <li className='item'>
            <h2>Front-End</h2>
            <span>React, HTML, CSS, NPM, Material UI</span>
        </li>
        <li className='item'>
            <h2>Launguages</h2>
            <span>Python, JavaScript, Typescript</span>
        </li>
        <li className='item'>
            <h2>Tools</h2>
            <span>Firebase, Github, Heroku, Netlify</span>
        </li>
        </ol>
       </div>
    </div>
  )
}

export default Home