import { createSlice } from "@reduxjs/toolkit";

// Estado inicial de la lista de tareas
const initialState = {
  tasks: [], // Lista de tareas
  filter: "all", // Filtro: all, completed, pending
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Acción para agregar una nueva tarea
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    // Acción para marcar una tarea como completada
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // Acción para eliminar una tarea
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // Acción para cambiar el filtro (all, completed, pending)
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Exportamos las acciones y el reducer
export const { addTask, toggleTask, deleteTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
