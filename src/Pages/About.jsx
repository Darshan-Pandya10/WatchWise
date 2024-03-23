import React from 'react'

function About() {
  return (
    <div className="bg-white min-h-screen pt-28 text-black px-4 py-8 md:px-8 lg:px-16 xl:px-20">
      <h1 className="text-3xl font-bold mb-4">Welcome to <span className="text-indigo-600">WatchWise</span></h1>
      <p className="mb-8">The ultimate platform for effortless movie discovery. Whether you're in search of your next cinematic adventure or simply want to delve deeper into the world of film, WatchWise has you covered.</p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Discover with Ease</h2>
        <p className="mb-4">At WatchWise, we believe in making movie exploration a breeze. Our platform offers curated movie lists tailored to your preferences, categorized under four distinct criteria:</p>
        <ul>
          <li className="mb-2"><strong className="text-indigo-600">Popular:</strong> Stay updated with the latest buzz and trending films.</li>
          <li className="mb-2"><strong className="text-indigo-600">Upcoming:</strong> Be ahead of the curve by exploring what's on the horizon.</li>
          <li className="mb-2"><strong className="text-indigo-600">Top-rated:</strong> Dive into critically acclaimed masterpieces and fan favorites.</li>
          <li className="mb-2"><strong className="text-indigo-600">Now Streaming:</strong> Instantly access movies available for streaming, right at your fingertips.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Advanced Search</h2>
        <p className="mb-4">Looking for something specific? Our advanced search feature empowers users to refine their movie selection based on release year or rating, ensuring you find the perfect film for any occasion.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Comprehensive Movie Details</h2>
        <p className="mb-8">With WatchWise, gone are the days of scouring multiple sources for movie information. Gain instant access to comprehensive details about any film you desire, whether you're making your next watchlist or simply satisfying your curiosity.</p>
      </div>
    </div>
  )
}

export default About
