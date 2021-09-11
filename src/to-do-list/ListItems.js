import React from 'react';
import { BsTrash, BsPencil, BsCheck } from 'react-icons/bs';
import { Checkbox } from 'pretty-checkbox-react';

import '@djthoms/pretty-checkbox';

function ListItems(props){

 return (
        <div className="list-items-and-title">
            <h2 className="todo-title">To Do</h2>
                {props.toDos.length > 0 ? (
                    props.toDos.map((toDo) =>
                    <form className="list-items" key={toDo.id}>
                        <Checkbox icon={<BsCheck className="svg" data-type="svg"/>} className="todo-checkbox" defaultChecked={toDo.completed} checked={props.completed[toDo.id].completed} onChange={ () => {
                            props.handleCheck(toDo);
                            props.setCompleted({...props.completed, [toDo.id]: toDo.completed});
                        }}></Checkbox>
                        <span className="todo-item">{toDo.task}</span>
                        <button className="edit-todo yellow-button" onClick={() => props.editToDo(toDo)}><BsPencil/></button>
                        <button className="delete-todo red-button" onClick={() => props.deleteToDo(toDo.id)}><BsTrash/></button>
                    </form>
                    )
                ) : <div className="empty-list">No tasks have been added.</div>}
        </div>
    )
}

export default ListItems;