import React from 'react' ;
import TodoList from './TodoList';
import { useEffect, useState } from 'react' ;
import axios from 'axios' ;



function TodoListPanel () {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/todos');
                console.log('debug >>> ', response);
                setData(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        getTodos(); // useEffect 내부에서 비동기 함수 호출
    }, []);

    const clickHandler = (id) => {
        console.log("debug >>> clickHandler click", id) ;
    }

    return (
        <div>
        {data.map((todo,index) => {
            return (
            <TodoList key={todo.id} subject ={todo.subject} 
            content = {todo.content} completed = {todo.completed} onClick = {() => clickHandler(todo.id)}/>    
            );
        })}
        </div>
    );
}

export default TodoListPanel ;