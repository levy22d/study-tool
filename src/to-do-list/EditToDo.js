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
            <input type="submit" value="Done"/>
            <input type="button" value="Cancel" onClick={() => props.setEditing(false)}/>
        </form>
    )
}

export default EditToDo;