import React from 'react'
import Header from '../Header/Header'
import "./About.css"

const About = () => {
  return (
<>
<Header/>
<div class="aboutc">
<div class="About-us">
    <h1 className='aboutHeading'> About Us </h1>
    <br /> <br /> <br />
	<img src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1628677506-101156.png"/>
	<p>Our mission is to empower young Students to be the inventors and creators.</p>
	<p>In a world where so much is being done for technology and so little for the environment, education is not even a part of most discussions.</p>
    <p>We at Studytonight believe that by widening the reach of education, by making it freely available, so much can be achieved.</p>
    <p>And this journey started in 2013 when a young boy thought "wouldn't it be great, to have a website, with simple tutorials for programming languages, just like a friend would teach you!", and Studytonight was born.</p>
  </div>
  </div>


</>
  
  )
}

export default About