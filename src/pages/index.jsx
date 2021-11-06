import React from 'react'
import Blog from '../components/blog'
import Hero from '../components/hero'
import Services from '../components/services'
import '../styles/global.css'

const Index = () => (
  <main>
    <Hero />
    {/* section brands */}
    <Services />
    <Blog />
  </main>
)

export default Index
