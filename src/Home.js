import React from "react";

function Home() {

  return (
    <div className="homepage">
      <h2 className="h2">wishing you and yours<br></br> A FERN-TASTIC <br></br> holiday season <br></br>🍃</h2>
      <img 
        src={require('./christmas-cactus-snoopy.gif')} 
        className="home-gif" 
        alt="An animated GIF depicting Snoopy, the Peanuts character, decorating a cactus in blinking Christmas lights." 
      />
    </div>
  )
}

export default Home;