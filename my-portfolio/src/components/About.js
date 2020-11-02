import React from 'react';
import './About.scss';


export default function About(){
    return(
        <div className="about">
            <div className="title"><span>A</span>bout <span>M</span>e</div>
            <div className="content">
                <div className="box">
                   <h2>간단한 자기소개</h2>
                   <p></p>
                </div>
                <div className="box">
                    <h2>개발자가 되고 싶은 계기</h2>
                    <p></p>
                 </div>
                 <div className="box">
                    <h2>앞으로의 목표</h2>
                    <p></p>
                 </div>
            </div>
        </div>
    )
}