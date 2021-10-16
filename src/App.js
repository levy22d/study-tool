import React from 'react';
import ToDoList from './to-do-list/ToDoList';
import Timer from './timer/Timer';
import StudyBreak from './study-break/StudyBreak';
import NavBar from './navigation/NavBar';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function App() {

  return (
    <AlertProvider template={AlertTemplate}>
      <NavBar/>
      <h1 className="app-section" id="page-title">Study Tool</h1>
      <ToDoList id="todo-list"/>
      <Timer id="timer"/>
      <StudyBreak id="study-break"/>
    </AlertProvider>
  );
}

export default App;
