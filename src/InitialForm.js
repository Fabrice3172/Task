import React, { useState } from 'react';

const InitialForm = ({ tasks, setTasks }) => {
    const [task, setTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, { title: task, completed: false, textAlign : 'center'}]);
            setTask('');
        }
    };

    return (
        <form style={{ textAlign: 'center' }} className="task-form" onSubmit={addTask}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button style={{ textAlign: 'center' }} type="submit">Ajouter une tâche</button>
        </form>
    );
};

export default InitialForm;