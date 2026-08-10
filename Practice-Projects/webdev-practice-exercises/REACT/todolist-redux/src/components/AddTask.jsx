import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todoSlice";

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask(taskText));
      setTaskText(""); // Limpiar el input después de agregar la tarea
    }
  };

  return (
    <div>
      <input
        type='text'
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder='Nueva tarea...'
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
};

export default AddTask;
