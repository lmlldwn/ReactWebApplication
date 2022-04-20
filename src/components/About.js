import React from 'react'


function DisplayAbout() {
  const author = {
    name: "Lemuel Aldwin Garcia",
    email: "lemuelaldwingarcia@gmail.com",
    github: "www",
    linkedin: "www"
  }
  return(
    <div>
      <div className='author'>
        <label>Author: {author.name}</label>
      </div>
      <div className='contacts'>
        <ul>
          <li>Email: {author.email}</li>
          <li>GitHub: {author.github}</li>
          <li>LinkedIn: {author.linkedin}</li>
        </ul>
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <DisplayAbout />
    </div>
  )
}

export default About