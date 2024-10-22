import React from 'react'
import Blogshero from './Blogshero'
import Blogsdetails from './Blogsdetails'
import BlogsServices from './BlogsServices'

import MostlyViewed from './MostlyViewed'
function Blogs() {
  return (
    <div>
        <Blogshero/>
        <Blogsdetails/>
        <MostlyViewed/>
        <BlogsServices/>
    </div>
  )
}

export default Blogs