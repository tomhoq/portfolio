import { motion } from "framer-motion"
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import l from './assets/l.png'
import g from './assets/g.png'

import './contact.css'

export default function Contact(props) {
    return (
        <motion.div
            variants={props.variants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="contacts"
            custom={props.direction}
        >
          <h1>Let's get in touch</h1>
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
              <img src={github} className='empty' onClick={() => window.open("https://github.com/tomhoq")} alt="" />
              <img src={g} className="full" onClick={() => window.open("https://github.com/tomhoq")} alt="" />
            </div>
          </div> 
        </motion.div>
    )
}