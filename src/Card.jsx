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
        title, 
        clickable,
        location,
        at,
        info,
        short,
        id,
        cardShown,
        setCard
        }= props;
    
    const style = {
        width: width, 
        marginBottom: marginBottom, 
        marginLeft: marginLeft,
    };
    
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
    
    const cardClass = clickable && cardShown===id ? "selected" :clickable ? "clickable" : 'project';
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