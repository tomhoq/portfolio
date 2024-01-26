import { useState } from 'react'
import left from './assets/left_arrow.png'
import right from './assets/right_arrow.png'
import fig from './assets/fig.png'
import rect from './assets/rect.png'
import cv from './assets/CV.jpg'
import book from './assets/book.png'
import bolt from './assets/bolt.png'
import ml from './assets/ml.png'
import lupa from './assets/lupa.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import l from './assets/l.png'
import g from './assets/g.png'
import './App.css'

function App() {
  const [page, setpage] = useState(0);

  const setPersonal = () => {
    setpage(1);
  }

  const setResume = () => {
    setpage(2);
  }

  const setContacts = () => {
    setpage(3);
  }

  const download = () => {
    const pdfUrl = "CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Tomaz.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextPage = () => {
    if(page === 1){
      setpage(2);
    } else if(page === 2){
      setpage(3);
    }
  }

  const previousPage = () => {
    if(page === 2){
      setpage(1);
    } else if(page === 3){
      setpage(2);
    }
  }

  return (
    <div id="root">
      {/* Move the link elements to the head of your HTML document */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      <div className="card">
        <div className="navbar">
          <h2 onClick={setPersonal} className={page===1 ? "clicked":""} >Personal</h2>
          <h2 onClick={setResume} className={page===2 ? "clicked":""} >Resume</h2>
          <h2 onClick={setContacts} className={page===3 ? "clicked":""} >Contact me</h2>
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
            { page !== 0 && page !== 1? <img className="arrow" onClick={previousPage} src={left}></img> : <></>}

            { page === 0 ? <> </>:
              page === 2 ?  
                <div className="personal">
                  <img className="cv" src={cv}></img> 
                  <button onClick={download} className='down'>Download</button>
                </div> : 
              page === 1 ? 
                <div className="about">
                  <h2>More about me</h2>
                  <div className='subheader'>
                    <h3>Academically focused</h3>
                    <img classname="book" src={book} alt="" />
                  </div>

                  <p>Finished secondary with an average of 18.9/20 
                    and will soon end my bachelor with a predicted 15.7.</p>
                  <div className='subheader'>
                    <h3>Machine learning Enthusiast</h3>
                    <img classname="book" src={ml} alt="" />
                  </div>
                  <p>Finished the Machine Learning subject with a 19/20.
                    I often read articles on the area about latest breakthroughs.
                    I have also taken some online courses like Google’s “Introduction to Generative AI”
                    and participate in challenges provided by Kaggle to increase my knowledge of NNs.
                  </p>
                  <div className='subheader'>
                    <h3>Versatile Athlete</h3>
                    <img classname="book" src={bolt} alt="" />
                  </div>
                  <p>I started playing roller hockey and tennis at 5, 
                    competing in national championships in both and earning awards. 
                    Additionally, I'm a regular gym-goer and run two half marathons each year. 
                    Exercise is a big part of my life and I always make time for it.
                  </p>
                  <div className='subheader'>
                    <h3>Curiosity driven</h3>
                    <img className="lupa" src={lupa} alt="" />
                  </div>
                  <p>Always learning something new, whether it's a new instrument 
                    (<a href='https://www.youtube.com/watch?v=m0SpYPigoaM'>guitar</a>), a new language (Italian), or a 
                    framework/programming language (React and Solidity, 2023).
                  </p>
                </div>: 
              page === 3 ? 
              <div className="contacts">
                <h2>Location</h2>
                <p>Loures, Portugal</p>
                <h2>Email</h2>
                <p>tomaz.goncalves-silva@tecnico.ulisboa.pt</p>
                <h2>Internship/Part-time</h2>
                <p>Available</p>
                <div className="media">
                  <div className="same">
                    <img src={linkedin} className='empty' onClick={() => window.open("https://www.linkedin.com/in/tomaz-silva-555397227/")} alt="" />
                    <img src={l} className="full" onClick={() => window.open("https://www.linkedin.com/in/tomaz-silva-555397227/")} alt="" />
                  </div>
                  <div className="same">
                    <img src={github} className='empty' onClick={() => window.open("https://www.linkedin.com/in/tomaz-silva-555397227/")} alt="" />
                    <img src={g} className="full" onClick={() => window.open("https://www.linkedin.com/in/tomaz-silva-555397227/")} alt="" />
                  </div>
                </div> 
                
              </div> : <></>}
            { page !== 0 && page !== 3? <img className="arrow" onClick={nextPage} src={right}></img> : <></>}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
