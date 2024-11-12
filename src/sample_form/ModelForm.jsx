import React from 'react' ;
import { useState, useEffect } from 'react' ;

function ModelForm () {

    const [value, setValue] = useState('');
    const [item, setItem] = useState('');
    const useEffect = () => {
        console.log("useEffect");
    }

    const selectHandler = (e) => {
        setItem(e.target.value);
        console.log(item);
    }

    const handlerChange = (event) =>{
        setValue(event.target.value) ;
        console.log(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("debug submit >>> ", value);
        alert('value >>' , value) ;
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type ="text" value={value} onChange={handlerChange}/>
                <button>Submit</button>
            </label>
                과일을 선택해주세요 : 
                <select value={item} onChange={selectHandler}>
                    <option value="apple">사과</option>
                    <option value="bananan">바나나</option>
                    <option value="watermelon">수박</option>
                </select>
        </form>

    );
}

export default ModelForm ;