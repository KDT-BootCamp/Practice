import {useConunter} from './useCounter' ;
import { useEffect, useState } from 'react';

const MAX_CAPACITY = 10 ;

function Capacity (props) {

    const [count,increaseCnt,decreaseCnt] = useConunter() ;
    const [isFull,setIsFull] = useState(0) ;

    useEffect(() => {
        console.log(">>>>>>>>>>> useEffect event count" , count) ;
        if(count >= MAX_CAPACITY){
            setIsFull(true) ;
        }
    
    },[count]) ;
    
    return(
        <div class="container">
            <div>   
                <p>{`총 ${count} 명 수용 `}</p>
                <button onClick={increaseCnt} disabled={isFull} class="btn btn-primary">입장</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button class="btn btn-danger" onClick={decreaseCnt} disabled={!isFull}>퇴장</button>
            
                { isFull && <p style={{color : "red"}}>정원이 가득찼습니다.</p> }
            </div>  
        </div>
    );
}

export default Capacity ;