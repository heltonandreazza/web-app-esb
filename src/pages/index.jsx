import React from 'react'
import Blog from '../components/blog'
import Footer from '../components/footer'
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
    <Footer />
  </main>
)

export default Index
