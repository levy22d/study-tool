import React, {useState, useEffect} from 'react';

function EditToDo(props){
    const [toDo, setToDo] = useState(props.currentToDo);
    const handleInput = (event) => {
        setToDo({ ...toDo, task: event.target.value })
    }

    const editButtonPressed = (event) => {
        event.preventDefault();
        props.updateToDo(toDo.id, toDo);
    }

    useEffect(() => setToDo(props.currentToDo), [props]);

    return (
        <form onSubmit={editButtonPressed}>
            <input type="text" value={toDo.task} onChange={handleInput}/>
            <button type="submit">Done</button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditToDo;