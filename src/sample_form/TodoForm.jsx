import React, { useState } from "react" ;
import axios from 'axios' ;

function TodoForm () {
    
    const [subject,setSubject] = useState('');
    const [content,setContent] = useState('');
    const [complete, setComplete] = useState(false);

    const completeHandler = () => {
        setComplete(!complete);
        console.log("debug >>> ",complete);
    }

    const subjectHandler = (e) => {
        setSubject(e.target.value);
    }

    const areaHandler = (e) => {
        setContent(e.target.value);
    }

    const todoCreateHandler = async() => {
        
        const data = {
            
            id : Date.now() ,
            subject : subject ,
            completed : false ,
            content : content 
        }
        console.log("debug data >>> ", data)
        try{
            
            const response = await axios.post('http://localhost:8000/todos', data);            
            console.log("debug >>> post response, " , response) ;
            console.log("debug >>> post response data " , response.data) ;
            window.alert("전송 완료");
        } catch(err){
            
            console.log(err) ;
        }
    }

    return (
        <div class="container">
            <h2> Todo-Creat </h2>
        
        <form>
            <div class="row">
                <div class="col-6">
                    <div calss="form-group">
                        <label>Todo Subject</label>
                        <input type="text" class="form-control" value={subject} onChange={subjectHandler}/>
                    </div>
                </div>
            <div class="col-6">
                <div class="form-group">
                    <label>State</label>
                    <div>
                        <button type="button" class={complete ? 'btn btn-primary' : 'btn btn-danger'} onClick={completeHandler}>
                        {complete ? 'Incompleted' : 'uncompleted'} </button>                    
                    </div>
                </div>
            </div>
        </div>

        <div class="col=12">
            <div class="form-group">
                <label>Body</label>
                <textarea class="form-control" cols="30" rows="10" value={content} onChange={areaHandler}></textarea>
            </div>
        </div>

        <button class="btn btn-outline-dark ml-2" type="button" onClick={todoCreateHandler}>Create</button>
        <button class="btn btn-outline-danger ml-2">Cancel</button>

        </form>
        </div>

);
}


export default TodoForm ;