import { motion } from "framer-motion"
import book from './assets/book.png'
import bolt from './assets/bolt.png'
import ml from './assets/ml.png'
import lupa from './assets/lupa.png'
import './personal.css'


export default function Personal(props) {
  
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
        <div className='subheader'>
          <h3>Academically focused</h3>
          <img className="book" src={book} alt="" />
        </div>
        <p>Finished secondary with an average of 18.9/20 
          and will soon end my bachelor with a predicted 15.7.</p>
        <div className='subheader'>
          <h3>Machine learning Enthusiast</h3>
          <img className="ml" src={ml} alt="" />
        </div>
        <p>Finished the Machine Learning subject with a 19/20.
          I often read articles on the area about latest breakthroughs.
          I have also taken some online courses like Google’s “Introduction to Generative AI”
          and participate in challenges provided by Kaggle to increase my knowledge of NNs.
        </p>
        <div className='subheader'>
          <h3>Versatile Athlete</h3>
          <img className="at" src={bolt} alt="" />
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
      </motion.div>
  )
}