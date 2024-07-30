import React, {useState} from 'react';
import TaskForm from './InitialForm';
import TaskList from './TaskList';

function App() {
    
    let [tasks, setTasks] = useState([]);

    function formatDate(date) {
      return date.toLocaleDateString();
    }

return (
  
    <div style={{ textAlign: 'center'}} className="container">
      <div style={{ textAlign: 'center', marginBottom: '150px' }}>
        <h2>Liste de tâches</h2>
      <div style={{ textAlign: 'center', marginBottom: '150px'}} teclassName="Comment-date">
        <h2>{formatDate(new Date())}</h2>
      </div>
      </div>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      
    </div>
    
);
}
export default App;
