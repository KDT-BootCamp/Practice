import { useState } from 'react' ;

function useConunter () {
    const [count, setCount] = useState(0) ; 
    
    const increaseCnt = () =>{
        setCount(count + 1);
    }

    const decreaseCnt = () => {
        setCount(count - 1 );
    }

    return [count,increaseCnt,decreaseCnt]
}   


export default useConunter ; 