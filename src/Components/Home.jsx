import React from 'react'
import HeroSection from './HeroSection'

function Home() {

    const data = {
        name: 'Stack Developer',
        image: './images/hero.svg'
    }
  return (
    <>
        <HeroSection {...data} />
    </>
  )
}

export default Home