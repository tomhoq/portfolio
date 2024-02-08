import React, { useState } from 'react';
import './css/Card.css';
import rocket from './assets/rocket.png';
import educ from './assets/educ.png';
import click from './assets/click.png';

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
        }= props;
    
    const style = {
        width: width, 
        marginBottom: marginBottom, 
        marginLeft: marginLeft,
        backgroundColor: color
    };
    
    const handleClick = () => {
        setClicked(prevClicked => !prevClicked);
    };

    const cardClass = clickable ? 'clickable' : 'project';
    console.log(type);
    return (
        <div className="main">
            {info && clicked &&
                <div onClick= {handleClick} className={`info-panel ${left ? "left" : "right"}`}>
                    <div className="header">
                        <div className="title-2">{short} </div>
                        <h3>@{location} -> {date}</h3>
                        <img className="log" src={
                        type==="xp" ? rocket : 
                        type ==="edu" ? educ : 
                        "ERROR: type not found"
                    } alt="" />
                    </div>
                    <div className='detail'>{info}</div>
                    {short==="First Website" && <a href="https://whackjack.netlify.app/">Wackjack</a>}
                </div>
            }
            <div className={cardClass} style={style} onClick={handleClick}>
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
            </div>
        </div>
    )
}