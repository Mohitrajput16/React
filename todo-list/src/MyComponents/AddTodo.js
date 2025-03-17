import React, { use, useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
        alert("Title or Description cannot be blank");
        }   
        else{
        props.addTodo(title, desc);
        }
    }

    let divtodo={
        backgroundcolor:"red"
    }
    return (
        
        <div className='container my-5 bg-light 'style={divtodo} >
            <h3  >Add A Todo</h3>  
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
              </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>

        </div>
    )
}

export default AddTodo
