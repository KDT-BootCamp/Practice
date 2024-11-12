import React from 'react' ;

function Book(props) {
    return (
        <div>
            <h2>처음 배우는 react {`${props.firstname}`}  {`${props.secondname}`}</h2>
        </div>
    ) ;
}

export default Book ;
