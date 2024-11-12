import React from 'react' ;

const list = [
    {   key : 1,
        subject : "java"
    },
    {key : 2,
        subject : "C"
    },
    {key : 3,
        subject : "c++"
    }
]


function NumberList() {
    // 배열의 반복에서 key 값을 가져야 warring이 안 뜸, 객체도 그러나? 검색해보자
    const lis = list.map( (obj, idx) =>
        <li key={obj.key}>{idx} : {obj.subject}</li>
    );

    return(
        <ul>
            {lis}
        </ul>
    );
}


export default NumberList ;