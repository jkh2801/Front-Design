import React from 'react';
import './About.scss';
import {useSelector} from 'react-redux';


export default function About(){
    const about_box = useSelector(state => state.dataReducer.about_box)
    console.log(about_box)
    const list = about_box.map(({title, desc}, index) => 
    <div className="box" key={index}>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>)
    return(
        <div className="about">
            <div className="title"><span>A</span>bout <span>M</span>e</div>
            <div className="content">
                {list}
            </div>
        </div>
    )
}