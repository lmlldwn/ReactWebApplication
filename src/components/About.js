import React from 'react'
import './About.css'

function DisplayAbout() {
  const author = {
    name: "Lemuel Aldwin Garcia",
    email: "lemuelaldwingarcia@gmail.com",
    github: "www",
    linkedin: "https://www.linkedin.com/in/lemuelaldwin/"
  }
  return(
    <div className='about'>
      
      <div className='contacts'>
        <div className='author'>
          <h2 id='name'>{author.name}</h2>
        </div>
          <div className='author-email'>Email: {author.email} </div>
          <div className='author-github'>GitHub: <a href='https://github.com/lmlldwn'>lmlldwn</a> </div>
          <div className='author-linkedin'>LinkedIn: <a href='https://www.linkedin.com/in/lemuelaldwin/'>Lemuel Aldwin Garcia</a></div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Author: </h1>
      <DisplayAbout />
    </div>
  )
}

export default About