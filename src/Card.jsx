import React, { useState } from 'react';
import './css/Card.css';
import rocket from './assets/rocket.png';
import educ from './assets/educ.png';
import click from './assets/click.png';
import { motion, AnimatePresence} from 'framer-motion';

export default function Card(props) {

    const [clicked, setClicked] = useState(false);

    const {width, 
        marginBottom, 
        marginLeft, 
        color="#95C086", 
        date, 
        type, 
        title, 
        clickable,
        location,
        at,
        info,
        short,
        left,
        id,
        cardShown,
        setCardId
        }= props;
    
    const style = {
        width: width, 
        marginBottom: marginBottom, 
        marginLeft: marginLeft,
        backgroundColor: color
    };
    console.log(clicked, cardShown, id, clickable);
    
    const handleClick = () => {
        if (clickable === false) return;
        if (clicked == true) {
            setCardId(-1);
        }
        else {
            setCardId(id);
        }
        setClicked(prevClicked => !prevClicked);
    };

    if (clicked && cardShown !== id) {
        setClicked(false);
    }
    
    const vari = {
        initial: {
            opacity: 0,
            width: width,
        },
        animate: {
            opacity: 1,
            width: "480px",
            x: 0,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            width: width,
            transition: {
                duration: 0.5
            }
        }
    }

    const vari1 = {
        initial: {
            backgroundColor: color,
        },
        animate: {
            transition: {
                duration: 0.2
            },
        },
        exit: {
            backgroundColor: color,
            transition: {
                duration: 0.2
            }
        }
    }

    const cardClass = clickable ? 'clickable' : 'project';
    return (
        <div className="main">
            <AnimatePresence>
            {info && clicked && cardShown === id &&
                <motion.div onClick= {handleClick} className={`info-panel ${left ? "left" : "right"}`}
                variants={vari} initial="initial" animate="animate" exit="exit">
                    <motion.div className="header"
                    variants={vari1} initial="initial" animate="animate" exit="exit">
                        <div className="title-2">{short} </div>
                        <h3>@{location} -&gt; {date}</h3>
                        <img className="log" src={
                        type==="xp" ? rocket : 
                        type ==="edu" ? educ : 
                        "ERROR: type not found"
                    } alt="" />
                    </motion.div>
                    <div className='detail'>{info}</div>
                    {short==="First Website" && <a href="https://whackjack.netlify.app/">Wackjack</a>}
                </motion.div>
            }
            </AnimatePresence>
            
            <motion.div className={cardClass} style={style} onClick={handleClick}>
                <div className='subheader'>
                    <p>{date}</p>
                    <img src={
                        type==="xp" ? rocket : 
                        type ==="edu" ? educ : 
                        "ERROR: type not found"
                    } alt="" />
                </div>
                <div className="title" style={{width: width-10}}>{title} 
                {at && <p className='span'> @{at}</p>}</div>
                {clickable ? <img className="click" src={click}/> : <></>}
            </motion.div>
        </div>
    )
}