import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

const App = () => {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTask />
      <FilterButtons />
      <TaskList />
    </div>
  );
};

export default App;
