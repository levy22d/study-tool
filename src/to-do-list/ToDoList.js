import React, {useState} from 'react';
import ListItems from './ListItems';
import AddToDo from './AddToDo';
import EditToDo from './EditToDo';
import './todo.css';

function ToDoList() {

  //retrieving items from localStorage
  const listOfToDos = []

  for(let key in localStorage){
    if(window.localStorage.getItem(key)){
      const parsed = JSON.parse(window.localStorage.getItem(key));
      listOfToDos.push({id: +key, task: parsed.toDo, completed: parsed.completed});
    }
    
  }

  listOfToDos.sort((a, b) => a.id - b.id); //keeps list in the same general order (theoretically)

  const [toDos, setToDos] = useState(listOfToDos);

  //setting which toDos were already completed when they were retrieved
  const initialCompleted = {}
  for(let i = 0; i < toDos.length; i++){
      initialCompleted[toDos[i].id] = toDos[i].completed;
  }
  const [completed, setCompleted] = useState(initialCompleted);

  //When something is checked off, it sets the completed property
  function handleCheck(toDo){
    toDo.completed = !toDo.completed;
    window.localStorage.setItem(toDo.id.toString(), JSON.stringify({toDo: toDo.task, completed: toDo.completed}));
    setToDos(toDos);
  }
  
  //Handles adding a toDo
  function addToDo(toDo){
    const lastElement = toDos[toDos.length - 1];
    if(lastElement){
      toDo.id = lastElement.id + 1;
    } else{
      toDo.id = 1;
    }
    setToDos([...toDos, toDo]);
    setCompleted({...completed, [toDo.id]: toDo.completed});
    window.localStorage.setItem(toDo.id.toString(), JSON.stringify({toDo: toDo.task, completed: toDo.completed}));
  }

  //Handles deleting toDos
  function deleteToDo(id){
    setToDos(toDos.filter((toDo) => toDo.id !== id));
    setEditing(false);
    const {[id]: empty, ...filteredValues} = completed;
    setCompleted(filteredValues);
    window.localStorage.removeItem(id);
  }

  //Keeps track of whether we are in editing mode and which toDo is being edited
  const [editing, setEditing] = useState(false);
  const initialState = { id: null, task: '', completed: false};
  const [currentToDo, setCurrentToDo] = useState(initialState);

  //Handles editing toDos
  function editToDo(toDo){
    setEditing(true);
    setCurrentToDo({id: toDo.id, task: toDo.task, completed: toDo.completed}); 
  }

  function updateToDo(id, updatedToDo){
    setEditing(false);
    setToDos(toDos.map((toDo) => toDo.id === id ? updatedToDo : toDo));
    window.localStorage.setItem(id.toString(), JSON.stringify({toDo: updatedToDo.task, completed: updatedToDo.completed}));
  }

  return (
    <div className="todo-list app-section">
    {editing ? (
      <EditToDo
        setEditing={setEditing}
        currentToDo={currentToDo}
        updateToDo={updateToDo}/>
    ) :
      <>
        <AddToDo addToDo={addToDo} />
        <ListItems 
          toDos={toDos} 
          completed={completed}
          setCompleted={setCompleted}
          deleteToDo={deleteToDo} 
          editToDo={editToDo} 
          handleCheck={handleCheck}
          />
      </>
      }
    </div>
  );
}

export default ToDoList;
