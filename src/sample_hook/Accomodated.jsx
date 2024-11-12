import { useState, useEffect } from "react";

const MAX_CAPACITY = 10 ;

function Accomodated (props) {

    const [isFull, setIsFull ] = useState(false) ;
    const [ count, setCount ] = useState(0);
    const [isEmpty, setIsEmpty ] = useState(false) ;
    
    
    const increaseCnt = () => {
        setCount(count + 1);
        console.log("debug >>>>> increase count", count);
    }

    const decreaseCnt = () => {
        if( count > 0 ){
            setCount(count - 1);
        }
        console.log("debug >>>>> decrease count", count);
    }

    useEffect(() => {
        console.log(">>>>>>>>>>> useEffect event count" , count) ;
        if(count >= MAX_CAPACITY){
            setIsFull(true) ;
        }
        if(count <= 0){
            setIsEmpty(true) ;
        }
    
    },[count]) ;


    return(
        <div class="container">
            <div>
                <p>{`총 ${count} 명 수용 `}</p>
                <button onClick={increaseCnt} disabled={isFull} class="btn btn-primary">입장</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button class="btn btn-danger" onClick={decreaseCnt} disabled={isEmpty}>퇴장</button>
            
                <p style={{color : "red"}}>정원 가득차부러스</p>
            </div>  
        </div>
    );
}

export default Accomodated ;