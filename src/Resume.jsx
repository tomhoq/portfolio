import arrow from './assets/arrow.png'
import Card from "./Card"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import './resume.css'

export default function resume(props) {
  const [showDegradeBottom, setShowDegradeBottom] = useState(true);
  const [showDegradeTop, setShowDegradeTop] = useState(false);

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
      if (document.getElementsByClassName("cv-folder")[0].scrollTop > 50) {
        setShowDegradeTop(true);
      } else {
        setShowDegradeTop(false);
      }
  
      if (document.getElementsByClassName("cv-folder")[0].scrollTop > 750) {
        setShowDegradeBottom(false);
      } else {
        setShowDegradeBottom(true);
      }
    };

    // Attach the scroll event listener when the component mounts
    if (document.getElementsByClassName("cv-folder")[0]) {
      document.getElementsByClassName("cv-folder")[0].addEventListener('scroll', handleScroll);
    }
      // Clean up the event listener when the component unmounts
    return () => {
      if (document.getElementsByClassName("cv-folder")[0]) {
        document.getElementsByClassName("cv-folder")[0].removeEventListener('scroll', handleScroll);
      }
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
  
  return (
      <motion.div variants={props.variants} 
      animate="animate" 
      initial="initial" 
      exit="exit"
      className="resume"
      custom={props.direction}>
      <button onClick={download} className='down'>Download</button>
      
      <div className="cv-folder">
        <div className="left-cards">
          <Card className width="200px" clickable={true} title="Aasdaa ssdasdads adasdasd" 
          date="2017-2018" color="#E9F4ED" type= "edu"></Card> 
        </div>
        <img className="cv" src={arrow}></img>
        <div className="right-cards">
          <Card className clickable={true} title="Aasdaa ssdasdads adasdasd" 
          date="2017-2018" color="#E9F4ED" type= "edu"></Card> 
        </div>
      </div>          


      <AnimatePresence>
      {showDegradeTop && 
        <motion.div className='degrade-top'
          variants={degradeVariants} 
          initial="initial" 
          animate="animate"
          exit="exit"  
          transition={{ duration: 0.4, ease: "easeInOut"}}
        ></motion.div>
      }
      </AnimatePresence>     

      <AnimatePresence>
        {showDegradeBottom && <motion.div 
        variants={degradeVariants} initial="initial" animate="animate"
        exit="exit"  transition={{ duration: 0.4, ease: "easeInOut"}}
        className="degrade-down"></motion.div>}
      </AnimatePresence>
      
    </motion.div>
  )
}