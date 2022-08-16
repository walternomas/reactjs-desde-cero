import { useState, useEffect } from 'react';
import { tasks as data } from './tasks';

console.log(data);

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => setTasks(data));

  if (tasks.length === 0) {
    return 'No hay tareas aún';
  } else {
    return (
      tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <hr/>
        </div>
      ))
    )
  }
}

export default TaskList