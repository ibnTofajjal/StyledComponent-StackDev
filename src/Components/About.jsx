import React from 'react'
import HeroSection from './HeroSection'

function About() {
    const data = {
        name: 'Stack Developer',
        image: './images/about1.svg'
    }
  return (
    <>
        <HeroSection {...data}/>
    </>
  )
}

export default About