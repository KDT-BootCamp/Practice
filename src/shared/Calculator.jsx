import React from 'react' ;
import TemporatorInput from './TemporatorInput' ;
import { useState } from 'react' ;

const toCelsius = (f) => {
    return ( f-32 ) * 5 / 9 ;

}

const toFahrenheit = (c) => {
    return ( c * 9 / 5) + 32  ;
}   

const tryConvert = (temp, convert) => {
    const input = parseFloat(temp);
    if(Number.isNaN(input)) {
        return '' ;
    }
    const output = convert(input) ;
    const rounded = Math.round(output * 1000) / 1000 ;
    return rounded.toString();
}

function Calculator() {

    const [temp, setTemp ] = useState('');
    const [scale, setScale] = useState('c');

    const changeCelsius = (temp) => {
        setTemp(temp) ;
        setScale('c');
    }

    const changeFahrenheit = (temp) => {
        setTemp(temp) ;
        setScale('f');
    }
    
    const celsius = scale === 'f' ?  tryConvert(temp, toCelsius) : temp ;
    const fahrenheit = scale === 'c' ? tryConvert(temp,toFahrenheit) : temp ;

    return (
        <div>
            <TemporatorInput scale='c' temp={celsius} onTempChange={changeCelsius} />

            <TemporatorInput scale='f' temp={fahrenheit} onTempChange={changeFahrenheit} />
        </div>
    );
}

//반목문 안에 있는 return은 어떤 식으로 처리되는가

export default Calculator ;