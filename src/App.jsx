import { useState } from 'react'
import body from './assets/default.png'
import fig from './assets/fig.png'
import rect from './assets/rect.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Move the link elements to the head of your HTML document */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      <div className="card">
        <div className="navbar">
          <h2>Personal</h2>
          <h2>Resume</h2>
          <h2>Contact me</h2>
        </div>

        <div className="body">
          <div className="left">
            <img id="fig" src={fig} alt="" />
            <h1 id="title">Hi, <br /> I am Tomaz Silva</h1>
            <div className="container">
              <img id="rect" src={rect} alt="" />
              <div className="info">
                <h2 id="subtitle">A little about me</h2>
                <p id="text">I am a Computer Science student at Instituto 
                Superior Técnico, Ulisboa. I currently work on my own,
                 tutoring younger students in math-related subjects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
