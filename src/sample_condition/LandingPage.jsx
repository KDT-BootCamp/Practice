import React from 'react' ;
import Toolbar from './Toolbar' ;
import { useState } from 'react' ;
function LandingPage () {
    
    const [isLogin, setIsLogin] = useState(false);
    
    const loginHandler = () => {
        console.log("debug >>> login 환영합니다");
    }
    const logoutHandler = () => {
        console.log("debug >>> logout btn click");
    } 

    return(
        <div class="container">
            <Toolbar isLogin={isLogin} onClickLogin={loginHandler} onClickLogout={logoutHandler} />
            <div style={{padding : 16}}>
                조건부 렌더링을 이용한 페이지 구성
            </div>
        </div>
    );
}

export default LandingPage ;