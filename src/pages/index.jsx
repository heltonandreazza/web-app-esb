import React from 'react'
import Blog from '../components/blog'
import Hero from '../components/hero'
import MeetUs from '../components/meetUs'
import Services from '../components/services'
import '../styles/global.css'

const Index = () => (
  <main>
    <Hero />
    <Services />
    <MeetUs />
    <Blog />
  </main>
)

export default Index
