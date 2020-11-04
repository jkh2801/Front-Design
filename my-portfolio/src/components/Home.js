import React from 'react';
import './Home.scss';
import leave1 from './image/leaves1.png';
import leave2 from './image/leaves2.png';
import leave3 from './image/leaves3.png';
import leave4 from './image/leaves4.png';
import leaves from './image/leaves5.png';


export default function Home(){
    return(
        <div className="banner">
            <img src={leaves} className="leaves" />
            <div className="set">
                <div><img src={leave1} /></div>
                <div><img src={leave2} /></div>
                <div><img src={leave3} /></div>
                <div><img src={leave4} /></div>
                <div><img src={leave1} /></div>
                <div><img src={leave2} /></div>
                <div><img src={leave3} /></div>
                <div><img src={leave4} /></div>
            </div>
            <h2><span>Welcome!!</span>&nbsp;&nbsp;&nbsp;<span>My-Portfolio</span></h2>
        </div>
    )
}