import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'
import HeroSection from './HeroSection'
import Services from './Services';

function Home() {
  const {updateHome} = useGlobalContext();

  useEffect(() => {
    updateHome()
  }, []);
    // const data = {
    //     name: 'Stack Developer',
    //     image: './images/hero.svg'
    // }

  return (
    <>
        <HeroSection />
        <Services/>
    </>
  )
}

export default Home