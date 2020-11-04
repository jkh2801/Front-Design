import React from 'react';
import './Skill.scss';
import {useSelector} from 'react-redux';

export default function Skill() {
    const skills = useSelector(state => state.dataReducer.skills)
    console.log(skills);
    const list = skills.map(({content, skill}, index) => 
    <div className="content" key={index}>
        <h2>{content}</h2>
        {skill.map(({name, value}, index) => 
        <div className="skill" key={index}>
        <span className="Name">{name}</span>
        <div className="percent">
            <div className="progress" style={{width: {value}}}></div>
        </div>
        <span className="Value">{value}</span>
    </div>)}
    </div>)

    return(
        <div className="skills">
            <div className="title"><span>M</span>y <span>S</span>kill</div>
            <div className="container">
                {list}
            </div>
        </div>
    )
}