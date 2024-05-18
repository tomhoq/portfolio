import { motion, scroll, useInView } from "framer-motion"
import { useRef } from "react"
import book from './assets/book.png'
import bolt from './assets/bolt.png'
import ml from './assets/ml.png'
import lupa from './assets/lupa.png'
import './css/personal.css'
import info from './resume_data/info'

export default function Personal(props) {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const style= props.scroll ? {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"} : null
  
  const style1= props.scroll ? {
    transform: isInView1 ? "none" : "translateX(200px)",
    opacity: isInView1 ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"} : null
  
  const style2= props.scroll ? {
    transform: isInView2 ? "none" : "translateX(-200px)",
    opacity: isInView2 ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"} : null

  const style3= props.scroll ? {
    transform: isInView3 ? "none" : "translateX(200px)",
    opacity: isInView3 ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"} : null

  return (
    <motion.div
      variants={props.variants}
      animate="animate"
      initial="initial"
      exit="exit"
      className="about"
      custom={props.direction}
    >
      <h2>More about me</h2>
      <div className="rest">
        <div className="set" ref={ref} style={style}>
          <div className="subheader">
            <h3>Academically focused</h3>
            <img className="book" src={book} alt="" />
          </div>
          <p>{info.data[1]}</p>
        </div>
        <div className="set" ref={ref1} style={style1}>
          <div className="subheader">
            <h3>Machine learning Enthusiast</h3>
            <img className="ml" src={ml} alt="" />
          </div>
          <p>{info.data[2]}
          </p>
        </div>
        <div className="set" ref={ref2} style={style2}>
          <div className='subheader'>
            <h3>Versatile Athlete</h3>
            <img className="at" src={bolt} alt="" />
          </div>
          <p>{info.data[3]}
          </p>
        </div>
        <div className="set" ref={ref3} style={style3}>
          <div className='subheader' >
            <h3>Curiosity driven</h3>
            <img className="lupa" src={lupa} alt="" />
          </div>
          <p>Always learning something new, whether it's a new instrument 
            (<a href='https://www.youtube.com/watch?v=m0SpYPigoaM'>guitar</a>), a new language (Italian and Danish), or a 
            framework/programming language (React, Vue).
          </p>
        </div>
      </div>
        
        
      </motion.div>
  )
}