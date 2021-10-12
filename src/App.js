import React from 'react';
import ToDoList from './to-do-list/ToDoList';
import Timer from './timer/Timer';
import StudyBreak from './study-break/StudyBreak';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App() {

  return (
    <AlertProvider template={AlertTemplate}>
      <ToDoList/>
      <Timer/>
      <StudyBreak/>
    </AlertProvider>
  );
}

export default App;
