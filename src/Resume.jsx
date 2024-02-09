import arrow from './assets/arrow.png'
import Card from "./Card"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import './css/resume.css'
import data from "./resume_data/data"

export default function resume(props) {
  const [showDegradeBottom, setShowDegradeBottom] = useState(true);
  const [showDegradeTop, setShowDegradeTop] = useState(false);
  const [cardShown, setCardShown] = useState(-1);

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
      if (document.getElementsByClassName("cv-folder")[0].scrollTop > 10) {
        setShowDegradeTop(true);
      } else {
        setShowDegradeTop(false);
      }
  
      if (document.getElementsByClassName("cv-folder")[0].scrollTop > 1100) {
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


  const setCardId = (card_id) => {
    setCardShown(card_id);
  }

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

  const cards_left = data.data.map((item, index) => { 
      if (item.left===true) {
        return <div className={`left-${index}`}>
                <Card key={index} title={item.title}
                date={item.date} color={item.color} 
                type={item.type} clickable={item.clickable}
                at={item.at} width={item.width}
                location={item.location} info={item.info}
                left={item.left} short={item.short}
                cardShown={cardShown} setCardId={setCardId}
                id={index}/>
              </div>
      }
    }
  )

  const cards_right = data.data.map((item, index) => { 
    if (item.left===false) {
      return <div className={`right-${index}`}>
              <Card ey={index} title={item.title}
                date={item.date} color={item.color} 
                type={item.type} clickable={item.clickable}
                at={item.at} width={item.width}
                location={item.location} info={item.info}
                left={item.left} short={item.short}
                cardShown={cardShown} setCardId={setCardId}
                id={index}/>
            </div>
    }
  }
)

  return (
      <motion.div variants={props.variants} 
      animate="animate" 
      initial="initial" 
      exit="exit"
      className="resume"
      custom={props.direction}>
      <button onClick={download} className='down'>Download CV</button>
      
      <div className="cv-folder">
        <div className="space">
          <div className="left-cards">
            {cards_left}
          </div>
          <img className="cv" src={arrow}></img>
          <div className="right-cards">
            {cards_right}
          </div>
        </div>
      </div>          


      <AnimatePresence>
      {showDegradeTop && 
        <motion.div className='degrade-top'
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