import React, {useState} from 'react';

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
        <form onSubmit={addButtonClicked}>
            <input aria-label="Add a new todo item" type="text" placeholder="Type in your next task..." value={toDo.task} onChange={handleInput}></input>
            <input type="submit" value="Add"></input>
        </form>
    )
}

export default AddToDo;