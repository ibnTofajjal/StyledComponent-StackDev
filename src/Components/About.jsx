import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context';
import HeroSection from './HeroSection'

function About() {
  const {updateAbout} = useGlobalContext();

  useEffect(() => {
    updateAbout()
  }, []);
  
  return (
    <>
        <HeroSection />
    </>
  )
}

export default About