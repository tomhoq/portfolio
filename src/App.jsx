import { useState } from 'react'
import {  motion } from "framer-motion"
import left from './assets/left_arrow.png'
import right from './assets/right_arrow.png'
import fig from './assets/fig.png'
import rect from './assets/rect.png'

import Personal from './Personal.jsx'
import Resume from './Resume.jsx'
import Contact from './Contact.jsx'

import './css/App.css'

function App() {
  const [page, setpage] = useState(0);
  const [direction, setdirection] = useState(0);

  const PERSONAL = 1;
  const RESUME = 2;
  const CONTACTS = 3;

  const setPersonal = (prevpage) => {
    if(prevpage > PERSONAL){
      setdirection(-1);
    } else {
      setdirection(1);
    }
    setpage(1);
  }

  const setResume = (prevpage) => {
    if(prevpage > RESUME){
      setdirection(-1);
    } else {
      setdirection(1);
    }
    setpage(2);
  }

  const setContacts = (prevpage) => {
    if(prevpage > CONTACTS){
      setdirection(-1);
    } else {
      setdirection(1);
    }
    setpage(3);
  }

  const nextPage = () => {
    setdirection(1);
    if(page === 1){
      setpage(2);
    } else if(page === 2){
      setpage(3);
    }
  }

  const previousPage = () => {
    setdirection(-1);
    if(page === 2){
      setpage(1);
    } else if(page === 3){
      setpage(2);
    }
  }

  const variants = {
    initial: direction => { 
      return {
        opacity: 0,
        marginRight: direction === 1 ? -200 : 200,
      }
    },
    animate: {
      opacity: 1,
      marginRight: 0,
    },
    exit: direction => { 
      return {
        opacity: 0,
        marginRight: direction === 1 ? -200 : 200,
      }
    },
  }

  return (
    <div id="root">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      <div className="card">
        <div className="navbar">
          <h2 onClick={() => setPersonal(page)} className={page===1 ? "clicked":""} >Personal</h2>
          <h2 onClick={() => setResume(page)} className={page===2 ? "clicked":""} >Resume</h2>
          <h2 onClick={() => setContacts(page)} className={page===3 ? "clicked":""} >Contact me</h2>
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
          <div className="right">
            { page !== 0 && page !== 1? <img className="arrow-left" onClick={previousPage} src={left}></img> : <></>}
            <div className='page'
            >
              { page === 0 && <> </>}
              { page === 2 && <Resume variants={variants} direction={direction}/>}

              { page === 1 &&
                  <Personal variants={variants} direction={direction}/>
              }
              { page === 3 && <Contact variants={variants} direction={direction}/>
              }
            </div>
            { page !== 0 && page !== 3? <img className="arrow-right" onClick={nextPage} src={right}></img> : <></>}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
