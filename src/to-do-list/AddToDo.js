import React, {useState} from 'react';
import { BsPlus } from 'react-icons/bs';

function AddToDo(props){
    const initialValue = { id: null, task: '', completed: false};
    const [toDo, setToDo] = useState(initialValue);
    const handleInput = (event) => setToDo({ ...toDo, task: event.target.value })

    function addButtonClicked(event){
        event.preventDefault();
        if(!toDo.task) return;

        props.addToDo(toDo);
        setToDo(initialValue);
    }

    return (
        <form className="add-todo" onSubmit={addButtonClicked}>
            <input className="add-todo-input" aria-label="Add a new todo item" type="text" placeholder="Type in your next task..." value={toDo.task} onChange={handleInput}></input>
            <button className="add-todo-button blue-button" aria-label="add" type="submit"><BsPlus/></button>
        </form>
    )
}

export default AddToDo;