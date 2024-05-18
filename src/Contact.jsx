import { motion } from "framer-motion"
import linkedin from './assets/linkedin.png'
import check from './assets/check.png'
import react from './assets/react.png'
import flask  from './assets/flask.png'
import pg from './assets/postgres.png'
import tf from './assets/tf.png'
import psd from './assets/psd.png'
import github from './assets/githubg_logo.png'
import l from './assets/l.png'
import g from './assets/g.png'

import './css/contact.css'

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
          <h1 id="title-contacts">Let's get in touch</h1>
          <div className="rest">
          <h2>Location</h2>
          <p>Loures, Portugal</p>
          <h2>Email</h2>
          <p>tomaz.goncalves.silva@gmail.com</p>
          <h2>Internship/Part-time</h2>
          <p>Available</p>
          <h2>Languages</h2>
          <p>Portuguese -&gt;<span>Native</span> 
          <br/>English -&gt;<span>C2 (CAE grade A, 2024)</span> 
          </p>
          <div className="horizontal">
            <div className="vertical">
              <h2>Skills</h2>
              <div className="skill">
                <img src={check} alt="" />
                <p>Python</p>
              </div>
              <div className="skill">
                <img src={check} alt="" />
                <p>C, C++</p>
              </div>
              <div className="skill">
                <img src={check} alt="" />
                <p>Java, JS, JSX</p>
              </div>
              <div className="skill">
                <img src={check} alt="" />
                <p>HTML, CSS</p>
              </div>
              <div className="skill">
                <img src={check} alt="" />
                <p>SQL</p>
              </div>
            </div>
            <div className="vertical">
              <h2>Frameworks/Tools</h2>
              <div className="frame">
                <img src={react} alt="" />
                <p>React</p>
              </div>
              <div className="frame">
                <img src={pg} alt="" />
                <p>PostGreSQL</p>
              </div>
              <div className="frame">
                <img src={flask} alt="" />
                <p>Flask</p>
              </div>
              <div className="frame">
                <img src={tf} alt="" />
                <p>TensorFlow</p>
              </div>
              <div className="frame">
                <img src={psd} alt="" />
                <p>Photoshop</p>
              </div>
            </div>
          </div>
          

          <div className="media">
            <div className={!props.scroll ? "same" : "same-scroll"}>
              <img src={linkedin} className='empty' onClick={() => window.open("https://www.linkedin.com/in/tomaz-silva-555397227/")} alt="" />
              <img src={l} className="full" onClick={() => window.open("https://www.linkedin.com/in/tomaz-silva-555397227/")} alt="" />
            </div>
            <div className={!props.scroll ? "same" : "same-scroll"}>
              <img src={github} className='empty' onClick={() => window.open("https://github.com/tomhoq")} alt="" />
              <img src={g} className="full" onClick={() => window.open("https://github.com/tomhoq")} alt="" />
            </div>
          </div> 
          </div>
          
        </motion.div>
    )
}