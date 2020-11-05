import React, {useState} from 'react';
import './Contact.scss';

export default function Contact() {
    const copyText = () => {
        const textarea =  document.createElement('textarea')
        textarea.value = "jkh2801@naver.com"
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        alert("복사되었습니다.")
        document.body.removeChild(textarea)
    }
    const openPage = (idx) => {
        const location = ["https://github.com/jkh2801", "https://velog.io/@jkh2801"]
        window.open(location[idx])
    }
    return(
        <div className="contact">
            <div className="title"><span>C</span>ontact <span>M</span>e</div>
            <div className="container">
                <div className="content"><h1>Thank you <br/> for watching</h1></div>
                <div className="content">
                    <div className="data email">
                        <h2 onClick={copyText}>jkh2801@naver.com</h2>
                    </div>
                    <div className="data git">
                        <h2 onClick={() => openPage(0)}>https://github.com/jkh2801</h2>
                    </div>
                    <div className="data til">
                        <h2 onClick={() => openPage(1)}>https://velog.io/@jkh2801</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
