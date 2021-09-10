import React from 'react';

function List(props){

 return (
        <div className="list">
            <p className="list-title">To do</p>
                {props.toDos.length > 0 ? (
                    props.toDos.map((toDo) =>
                    <form key={toDo.id}>
                        <input type="checkbox" defaultChecked={toDo.completed} checked={props.completed[toDo.id].completed} onChange={ () => {
                            props.handleCheck(toDo);
                            // setCompleted([...completed, {[toDo.id]: toDo.completed}]);
                            props.setCompleted({...props.completed, [toDo.id]: toDo.completed});
                        }}/>
                        <span className="list-element">{toDo.task}</span>
                        <input type="button" value="(edit)" onClick={() => props.editToDo(toDo)}></input>
                        <input type="button" value="(detele)" onClick={() => props.deleteToDo(toDo.id)}></input>
                    </form>
                    )
                ) : <span>No tasks have been added.</span>}
        </div>
    )
}

export default List;