import React from 'react';
import './Nav.scss';
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Nav() {
    return (
        <nav className="gnb">
            <div className="container">
                <div className="row">
                    <div className="logo_search_bar">
                        <a className="logo" href="/">Dudum</a>
                        <span className="search_bar">
                            <input className="search_input" type="text" placeholder="어떤 영상을 찾고 계신가요?"/>
                            <span className="search_button"><FontAwesomeIcon icon={faSearch} size="1x" /></span>
                        </span>
                    </div>
                    <div className="user_info_bar">
                        <span className="creator_registration_button">크리에이터 등록</span>
                        <a href="/login" className="navbar-signin">로그인</a>
                        <a href="/signup" className="navbar-signup">회원가입</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}