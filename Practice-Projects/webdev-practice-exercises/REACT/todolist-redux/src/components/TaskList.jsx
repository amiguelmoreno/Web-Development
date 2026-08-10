import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/todoSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    const filter = state.todos.filter;
    switch (filter) {
      case "completed":
        return state.todos.tasks.filter((task) => task.completed);
      case "pending":
        return state.todos.tasks.filter((task) => !task.completed);
      default:
        return state.todos.tasks;
    }
  });

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => handleToggle(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => handleDelete(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
