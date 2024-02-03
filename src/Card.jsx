import React from 'react';
import './Card.css';
import rocket from './assets/rocket.png';
import educ from './assets/educ.png';
import click from './assets/click.png';

export default function Card(props) {
    const {width = 200, marginBottom, marginLeft, color, date, type, title, clickable}= props;

    return (
        <div className='project' style={{ 
            width: props.width, 
            marginBottom: props.marginBottom, 
            marginLeft: props.marginLeft,
            backgroundColor: props.color}}>
            <div className='subheader'>
                <p>{props.date}</p>
                <img src={
                    props.type==="xp" ? rocket : 
                    props.type ==="edu" ? educ : 
                    "ERROR: type not found"
                } alt="" />
            </div>
            <div className="title" style={{width: props.width-50}}>{props.title}</div>
            {props.clickable ? <img className="click" src={click}/> : <></>}
        </div>
    )
}