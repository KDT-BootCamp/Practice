import React from "react"; 

function TodoList(props) {
    
    return(
        <div class ="container">
            <div class="card mt-2" onClick={props.onClick}>    
            <div class="card-body p-2 d-flex align-items-center"
                style={{'cursor' : 'pointer'}}>
                
                <div class="form-check flex-grow-1">
                    <input  type="checkbox" 
                            class="form-check-input" 
                            checked={props.completed}/>  
                    <label  class="form-check-label">
                        {props.subject}
                    </label>
                </div>
                <div>
                    <button class="btn btn-danger btn-sm">
                        Delete
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TodoList ; 