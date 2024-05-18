import { useState, useEffect, useRef } from 'react'
import {  motion, AnimatePresence } from "framer-motion"
import left from './assets/left_arrow.png'
import right from './assets/right_arrow.png'
import fig from './assets/fig.png'
import vector from './assets/Vector.png'
import github from './assets/github.png'
import gfull from './assets/gfull.png'
import Personal from './Personal.jsx'
import Resume from './Resume.jsx'
import Contact from './Contact.jsx'
import info from "./resume_data/info"

import './css/App.css'

function App() {
  const [page, setpage] = useState(0);
  const [width, setwidth] = useState(window.innerWidth);
  const [direction, setdirection] = useState(0);
  const [cardShown, setCardShown] = useState(-1);
  const [cardTitle, setCardTitle] = useState("");
  const [cardSubtitle, setCardSubtitle] = useState("");
  const [cardInfo, setCardInfo] = useState("");
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const setCard = (card_id, title, subtitle, info) => {
    setCardShown(card_id);
    setCardTitle(title);
    setCardSubtitle(subtitle);
    setCardInfo(info);
  }

  const PERSONAL = 1;
  const RESUME = 2;
  const CONTACTS = 3;

  useEffect(() => {
    const handleResizeWindow = () => setwidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  const checkLeftResume = (prevpage) => {
    if (prevpage === 2) {
      setCard(-1, "", "", "");
    }
  }

  const setPersonal = (prevpage) => {
    checkLeftResume(prevpage);
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
    checkLeftResume(prevpage);
    if(prevpage > CONTACTS){
      setdirection(-1);
    } else {
      setdirection(1);
    }
    setpage(3);
  }

  const nextPage = () => {
    checkLeftResume(page);

    setdirection(1);
    if(page === 1){
      setpage(2);
    } else if(page === 2){
      setpage(3);
    }
  }

  const previousPage = () => {
    checkLeftResume(page);
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

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        delay:0.25,
      }
    },
    exit: {
      opacity: 0,
    }
  }

  const str = {
    initial: {
      height: "58px",
    },
    animate: {
      height: "142px",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transition: {
        duration: 0.5,
      },
      height: "38px",
    },
  }
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  if (width > 1500 ) {
    return (
      <div id="root">

        <div className={start? "card" : "card-start"}>
          {start &&<motion.div className="navbar" 
          initial="hidden"
          animate={start ? "show" : "hidden"} transition={{duration:1.0}}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }}>
            <h2 onClick={() => setPersonal(page)} className={page===1 ? "clicked":""} >Personal</h2>
            <h2 onClick={() => setResume(page)} className={page===2 ? "clicked":""} >Resume</h2>
            <h2 onClick={() => setContacts(page)} className={page===3 ? "clicked":""} >Contact me</h2>
          </motion.div>
          }
          
          <div className="body">
            {<div className="left">
              <img id="fig" src={fig} alt="" />
              <h1 id="title">Hi, <br /> I am Tomaz Silva</h1>
              <div className="container">
                <AnimatePresence initial={false}>
                  { (cardShown===-1 || page !==2) && <motion.div variants={str}
                    initial="initial" animate="animate" exit="exit" className={start ? "info" : "info start"}>
                    <h2 id="subtitle">A little about me</h2>
                    <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} 
                    transition={{duration:0.3}}>
                        <p id="text">{info.data[0]}</p>
                    </motion.div>
                  </motion.div>
                  }
                </AnimatePresence>
                <AnimatePresence>
                  {cardShown!=-1 && page ===2 && <motion.div variants={fade}  
                    initial="initial" animate="animate" exit="exit" className="card-details" 
                    >
                        <div className="header">
                            <div className="title-2">{cardTitle} </div>
                            <p>{cardSubtitle}</p>
                        </div>
                        <motion.div className='detail'
                        variants={fade}>{cardInfo}
                        {cardTitle==="First Website" && <div><a id="link" href="https://waackjack.netlify.app/">Try it here,</a> <br></br>
                          <a href="https://github.com/tomhoq/Wackjack">Source code.</a>
                        </div>
                          }
                        {cardTitle==="Computer Science" && <a id="eth" href="https://github.com/tomhoq/IST-Projects">
                          <div className="gitsame">
                            <img src={github} className='link-github empty'  alt="" />
                            <img src={gfull} className="link-github full" alt="" />
                          </div></a>
                          }
                        {cardTitle==="ETHGlobal Hackathon" && <a id="eth" href="https://ethglobal.com/showcase/solveth-aj4k7">here.</a>}
                        </motion.div>
                        {cardTitle==="Physical Computing course" && 
                        <a id="eth" href="https://github.com/tomhoq/Athens2022">
                          <div className="gitsame">
                            <img src={github} className='link-github empty'  alt="" />
                            <img src={gfull} className="link-github full" alt="" />
                          </div></a>}
                    </motion.div>
                  }
                </AnimatePresence>

              </div>
            </div>
            }
            {start && <div className="right">
              { page !== 0 && page !== 1? <img className="arrow-left" onClick={previousPage} src={left}></img> : <></>}
              <div className='page'>
                { page === 0 && <> </>}

                { page === 1 &&
                    <Personal variants={variants} direction={direction} scroll={false}/>
                }

                { page === 2 && <Resume variants={variants} direction={direction} scroll={false}
                cardShown={cardShown} setCard={setCard}/>
                }
                
                { page === 3 && <Contact variants={variants} direction={direction}/>
                }
              </div>
              { page !== 0 && page !== 3? <img className="arrow-right" onClick={nextPage} src={right}></img> : <></>}
              </div>
            }
          </div>
        </div>
        {!start && <img src={vector} id="vector" onClick={() => setStart(true)} alt="" /> }
      </div>
    )
  }
  else if (width < 500 ) {
    return ( 
      <div id="root">
        The website does not yet support screens smaller than 500px. Sorry for the inconvenience.
      </div>
    )
  }
  else if (width <= 1500 ) {
    //vertical layout
    return (
      <div id="root">
        <div className={start? "card" : "card-start"}>
          {start &&<motion.div className="navbar" 
          initial="hidden"
          animate={start ? "show" : "hidden"} transition={{duration:1.0}}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
        }}>
            <h2 onClick={() =>{handleClick(ref)}}>Personal</h2>
            <h2 onClick={() => {handleClick(ref1)}}>Resume</h2>
            <h2 onClick={() => {handleClick(ref2)}}>Contact me</h2>
          </motion.div>
        }
          
          <div className="body">
            {<div className="left">
              <img id="fig" src={fig} alt="" />
              <h1 id="title">Hi, <br /> I am Tomaz Silva</h1>
              <div className="container">
                <AnimatePresence initial={false}>
                  { (cardShown===-1 || page !==2) && <div className={start ? "info" : "info start"}>
                    <h2 id="subtitle">A little about me</h2>
                    <div> 
                      <p id="text">{info.data[0]}</p>
                    </div>
                  </div>
                  }
                </AnimatePresence>

              </div>
            </div>
            }
            {start && <div className="right">
              <div className='page'>
                <div className="page1" ref={ref} >
                  <Personal variants={variants} direction={direction} scroll={true}/>
                </div>
                <div  className="page1" ref={ref1}>
                  <Resume small={width < 600} variants={variants} direction={direction} scroll={true}
                  cardShown={cardShown} setCard={setCard}/>
                </div>
                <div  className="page1" ref={ref2}>
                  <Contact variants={variants} direction={direction} scroll={true}/>
                </div>
              </div>
              </div>
            }
          </div>
          {!start && <img src={vector} id="vector" onClick={() => setStart(true)} alt="" /> }
        
        </div>
        
      </div>
    )
  }
}

export default App
