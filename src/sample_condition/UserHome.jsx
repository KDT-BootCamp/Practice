import React, { useState } from 'react' ;
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


function UserHome () {

    const [flag, setFalg] = useState(false) ;
    const loginHandler = () => {
        setFalg(true);
        console.log("debug >>> login");
    }

    const logoutHandler = () => {
        setFalg(false);
        console.log("debug >>> logout");
    }

    let btn ;


    if(flag){
        btn = <LoginButton onClick={loginHandler}/> ;
    }
    else {
        btn = <LogoutButton onClick={logoutHandler}/> ;
    }
    return(
        <div>
            <Greeting isLogin={flag}/>
            {btn}
        </div>
    );
};

export default UserHome ;