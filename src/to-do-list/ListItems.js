import React from 'react';
import { BsTrash, BsPencil } from 'react-icons/bs';

function ListItems(props){

 return (
        <div className="list-items-and-title">
            <p className="todo-title">To Do</p>
                {props.toDos.length > 0 ? (
                    props.toDos.map((toDo) =>
                    <form className="list-items" key={toDo.id}>
                        <input className="todo-checkbox" type="checkbox" defaultChecked={toDo.completed} checked={props.completed[toDo.id].completed} onChange={ () => {
                            props.handleCheck(toDo);
                            props.setCompleted({...props.completed, [toDo.id]: toDo.completed});
                        }}/>
                        <span className="todo-item">{toDo.task}</span>
                        <button className="edit-todo" onClick={() => props.editToDo(toDo)}><BsPencil/></button>
                        <button className="delete-todo" onClick={() => props.deleteToDo(toDo.id)}><BsTrash/></button>
                    </form>
                    )
                ) : <span>No tasks have been added.</span>}
        </div>
    )
}

export default ListItems;