import React, {useState, useEffect} from 'react';
import { BsCheck, BsX } from 'react-icons/bs';

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
        <>
            <h2 className="edit-title">Edit Item</h2>
            <form className="edit-form" onSubmit={editButtonPressed}>
                <input className="edit-input" type="text" value={toDo.task} onChange={handleInput}/>
                <button className="edit-button edit-done" type="submit"><BsCheck/></button>
                <button className="edit-button edit-cancel" onClick={() => props.setEditing(false)}><BsX/></button>
            </form>
        </>
    )
}

export default EditToDo;