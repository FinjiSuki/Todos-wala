import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="font-sans leading-normal tracking-normal min-h-[75vh]">
  <div className="w-full mx-auto pt-12 md:pt-24 text-center">
    <div className="container px-3 mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold mb-2 text-gray-800">404</h1>
      <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-800">Sorry, the page you are looking for could not be found.</h2>
      <NavLink to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block mt-5">Go Home</NavLink>
    </div>
  </div>
</div>
  )
}

export default NotFound
