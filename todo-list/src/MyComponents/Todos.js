import React from 'react'
import { TodoItem } from "./Todoitem";

export const Todos = (props) => {
    return (
        <div className="container my-3">
            <h3 className=' my-4'>Todos List</h3>
            {props.todos.length===0? "no todos to display":
            props.todos.map((todo) => {
                return (
                  <>
                  <TodoItem 
                    todo={todo} 
                    key={todo.sno} 
                    onDelete={props.onDelete}/>  <hr/>
                  </>
                )
            })}
        </div>
    )
}
