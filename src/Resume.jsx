import arrow from './assets/arrow.png'
import arrow420 from './assets/arrow420.png'
import arrow360 from './assets/arrow360.png'

import Card from "./Card"
import { useRef } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useEffect, useState } from "react"
import './css/resume.css'
import data from "./resume_data/data"

export default function resume(props) {
  const [showDegradeBottom, setShowDegradeBottom] = useState(true);
  const [cvImageSrc, setCvImageSrc] = useState(arrow);

  const download = () => {
    const pdfUrl = "CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Tomaz.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementsByClassName("cv-folder")[0].scrollTop > 1100) {
        setShowDegradeBottom(false);
      } else {
        setShowDegradeBottom(true);
      }
    };

    const changeSizeImage = () => {
      const width = window.innerWidth;
      console.log(cvImageSrc);
      if (width < 420) {
        setCvImageSrc(arrow420);
        document.getElementsByClassName("cv")[0].src = arrow360;
      } else if (width < 514) {
        setCvImageSrc(arrow360);
        document.getElementsByClassName("cv")[0].src = arrow420;
      } else if (cvImageSrc !== arrow){
        setCvImageSrc(arrow); // Default image source
      }
    };

    // Attach the scroll event listener when the component mounts
    if (document.getElementsByClassName("cv-folder")[0]) {
      document.getElementsByClassName("cv-folder")[0].addEventListener('scroll', handleScroll);
    }

    window.addEventListener('resize', changeSizeImage);
    return () => {
      if (document.getElementsByClassName("cv-folder")[0]) {
        document.getElementsByClassName("cv-folder")[0].removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', changeSizeImage);
    };

  }, []);

  const degradeVariants = {
    initial: 
    { height: 0,
      opacity: 0},
    animate: 
    { height: 205,
      opacity: 1},
    exit: 
    { height: 105,
      opacity: 0}
  }

  function getStyle(isInView, left) {
    return {
      transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'none' : left ? 'translateX(-200px)' : 'translateX(200px)',
    };
  }

const cards_left = data.data.map((item, index) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    if (item.left === true) {
      return (
        <div key={index} ref={ref} className={`left-${index}`} style={getStyle(isInView, item.left)}>
          <Card
            title={item.title}
            date={item.date}
            color={item.color}
            type={item.type}
            clickable={item.clickable}
            at={item.at}
            width={item.width}
            location={item.location}
            info={item.info}
            left={item.left}
            short={item.short}
            cardShown={props.cardShown}
            setCard={props.setCard}
            id={index}
          />
        </div>
      );
    }
  });

  const cards_right = data.data.map((item, index) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    if (item.left === false) {
      return (
        <div key={index} ref={ref} className={`right-${index}`} style={getStyle(isInView, item.left)}>
          <Card
            title={item.title}
            date={item.date}
            color={item.color}
            type={item.type}
            clickable={item.clickable}
            at={item.at}
            width={item.width}
            location={item.location}
            info={item.info}
            left={item.left}
            short={item.short}
            cardShown={props.cardShown}
            setCard={props.setCard}
            id={index}
          />
        </div>
      );
    }
  });

  return (
      <motion.div variants={props.variants} 
      animate="animate" 
      initial="initial" 
      exit="exit"
      className="resume"
      custom={props.direction}>
      {props.scroll && <h2 className='resume-title'>Resume</h2>}
      <button onClick={download} className='down'>Download CV</button>
      
      <div className="cv-folder">
        <div className="space">
          <div className={!props.scroll ? "left-cards" : "left-cards-scroll"}>
            {cards_left}
          </div>
          <img className="cv" src={arrow}></img>
          <div className={!props.scroll ? "right-cards" : "right-cards-scroll"}>
            {cards_right}
          </div>
        </div>
      </div>          

      {!props.scroll &&
      <div className='degrade-top'></div>}
  

      <AnimatePresence>
        {showDegradeBottom && !props.scroll && <motion.div 
        variants={degradeVariants} initial="initial" animate="animate"
        exit="exit"  transition={{ duration: 0.4, ease: "easeInOut"}}
        className="degrade-down"></motion.div>}
      </AnimatePresence>
      
    </motion.div>
  )
}