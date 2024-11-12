import { useState } from 'react' ;

function ButtonEvent () {

    const [isFlag, setIsFlag] = useState(false) ;


    const clickmethod = () => {

        setIsFlag(!isFlag);

        console.log("왜누르노 ");   
    }


    return (
        <div>
            <buttno class={`btn btn-${isFlag ? 'primary' : 'danger'}`} onClick={clickmethod}>{isFlag ? '꺼져' : '일루와'}</buttno>
        </div> 
    );
}


export default ButtonEvent ;