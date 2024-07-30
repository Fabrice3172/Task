import React from "react";


const Task = ({ task, index, completeTask, invalidateTask, deleteTask }) => {
    return (
    <section style={{ textAlign: 'center'}}>
        {task.completed ? (
            
            <button onClick={() => invalidateTask(index)}>Invalider</button>
            ) : (
            
            <button onClick={() => completeTask(index)}>Valider</button>
            )
        }
        <button onClick={() => deleteTask(index)}>Supprimer</button>
    </section>
    );
 };

 export default Task;