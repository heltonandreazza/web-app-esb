import React from 'react'
import BlogPosts from '../components/blogPosts'
import HeroPost from '../components/blogPosts/header'
import Footer from '../components/footer'

const Blog = () => {
  return (
    <main>
      <HeroPost />

      <BlogPosts />
      <Footer />
    </main>
  )
}

export default Blog
