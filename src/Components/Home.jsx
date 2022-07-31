import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'
import Contact from './Contact';
import HeroSection from './HeroSection'
import Services from './Services';

function Home() {
  const {updateHome} = useGlobalContext();

  useEffect(() => {
    updateHome()
  }, []);


  return (
    <>
        <HeroSection />
        <Services/>
        <Contact/>
    </>
  )
}

export default Home