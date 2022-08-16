function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return 'No hay tareas aún';
  } else {
    return (
      tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <hr />
        </div>
      ))
    )
  }
}

export default TaskList