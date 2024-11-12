import React from 'react' ;
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const styles = {

    wrapper: {

        padding: 16,

        display: "flex",

        flexDirection: "row",

        borderBottom: "1px solid grey",

    },

    greeting: {

        marginRight: 8,

    },

};
s

function Toolbar (props) {
    const { isLogin,onClickLogin,onClickLogout } = props ;
    return(
        <div class="container">
        {isLogin ? (<div><span style={styles.greeting}>로그인을 환영합니다</span> <LoginButton onClick={onClickLogin}/></div>) : (<LogoutButton onClick={onClickLogout}/>)}
        </div>
    );
}

export default Toolbar ;











