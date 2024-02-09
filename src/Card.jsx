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
        setCard
        }= props;
    
    const style = {
        width: width, 
        marginBottom: marginBottom, 
        marginLeft: marginLeft,
    };
    console.log(clicked, cardShown, id, clickable);
    
    const handleClick = () => {
        if (clickable === false) return;
        if (clicked == true) {
            setCard(-1, "", "", "");
        }
        else {
            setCard(id, short, `${at !== "" ? `@${at}, ` : ""}${location} -> ${date}`, info);
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
        },
        animate: {
            transition: {
                duration: 0.2
            },
        },
        exit: {
            transition: {
                duration: 0.2
            }
        }
    }

    const cardClass = clickable ? 'clickable' : 'project';
    return (
        <div className="main">            
            <motion.div className={cardClass} style={style} onClick={handleClick}>
                <div className='subheader'>
                    <p>{date}</p>
                    <img src={
                        clickable ? rocket : <></>
                    } alt="" />
                </div>
                <div className="title" style={{width: width-10}}>{title} </div>
            </motion.div>
        </div>
    )
}