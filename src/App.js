import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask'
import TaskCount from './components/TaskCount';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <TaskCount />
      <TaskList />
    </div>
  );
}

export default App;
