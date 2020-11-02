import React from 'react';
import './Skill.scss';

export default function Skill() {
    return(
        <div className="skills">
            <div className="title"><span>M</span>y <span>S</span>kill</div>
            <div className="container">
                <div className="content">
                    <h2>Language</h2>
                    <div className="skill">
                        <span className="Name">Java</span>
                        <div className="percent">
                            <div className="progress" style={{width: "70%"}}></div>
                        </div>
                        <span className="Value">70%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">JavaScript</span>
                        <div className="percent">
                            <div className="progress" style={{width: "55%"}}></div>
                        </div>
                        <span className="Value">55%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">Python</span>
                        <div className="percent">
                            <div className="progress" style={{width: "30%"}}></div>
                        </div>
                        <span className="Value">30%</span>
                    </div>
                </div>
                <div className="content">
                    <h2>Front-End</h2>
                    <div className="skill">
                        <span className="Name">Html</span>
                        <div className="percent">
                            <div className="progress" style={{width: "70%"}}></div>
                        </div>
                        <span className="Value">85%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">CSS</span>
                        <div className="percent">
                            <div className="progress" style={{width: "70%"}}></div>
                        </div>
                        <span className="Value">70%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">jQuery</span>
                        <div className="percent">
                            <div className="progress" style={{width: "70%"}}></div>
                        </div>
                        <span className="Value">70%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">React</span>
                        <div className="percent">
                            <div className="progress" style={{width: "50%"}}></div>
                        </div>
                        <span className="Value">50%</span>
                    </div>
                </div>
                <div className="content">
                    <h2>Back-End</h2>
                    <div className="skill">
                        <span className="Name">Spring</span>
                        <div className="percent">
                            <div className="progress" style={{width: "70%"}}></div>
                        </div>
                        <span className="Value">70%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">Node.js</span>
                        <div className="percent">
                            <div className="progress" style={{width: "50%"}}></div>
                        </div>
                        <span className="Value">50%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">My-SQL</span>
                        <div className="percent">
                            <div className="progress" style={{width: "50%"}}></div>
                        </div>
                        <span className="Value">50%</span>
                    </div>
                </div>
                <div className="content">
                    <h2>ETC</h2>
                    <div className="skill">
                        <span className="Name">AWS</span>
                        <div className="percent">
                            <div className="progress" style={{width: "30%"}}></div>
                        </div>
                        <span className="Value">30%</span>
                    </div>
                    <div className="skill">
                        <span className="Name">HADOOP</span>
                        <div className="percent">
                            <div className="progress" style={{width: "30%"}}></div>
                        </div>
                        <span className="Value">30%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}