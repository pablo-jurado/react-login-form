import React from 'react'

function Home (user) {
  return (
    <div className="home">
      <h1>Welcome <span id='userName'>{user}</span>!<br />You have successfully logged in to bloop.xyz</h1>
      <p>Are you ready to bloop today?</p>
    </div>
  )
}

export default Home
