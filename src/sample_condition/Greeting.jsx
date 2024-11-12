import React from 'react' ;
import UserGretting from './UserGreeting';
import GuestGreeting from './GuestGreeting';


function Greeting(props) {
    const isLogin = props.isLogin ;
    if(isLogin) {
        return <UserGretting />
    }
    else{
        return <GuestGreeting />
    }
}

export default Greeting ;