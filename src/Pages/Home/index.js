import React from 'react'
import { Features, Achieve, Category, HeroSection, OurTeam, Testimonials } from '../../Component'

function Home() {
  return (
    <div>
        <HeroSection />
        <Category />
        <Features />
        <Achieve />
        <OurTeam />
        <Testimonials />
    </div>
  )
}

export default Home