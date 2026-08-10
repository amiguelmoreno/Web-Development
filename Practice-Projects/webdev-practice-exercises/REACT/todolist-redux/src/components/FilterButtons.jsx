import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todoSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button
        onClick={() => handleFilterChange("all")}
        disabled={currentFilter === "all"}
      >
        Todas
      </button>
      <button
        onClick={() => handleFilterChange("completed")}
        disabled={currentFilter === "completed"}
      >
        Completadas
      </button>
      <button
        onClick={() => handleFilterChange("pending")}
        disabled={currentFilter === "pending"}
      >
        Pendientes
      </button>
    </div>
  );
};

export default FilterButtons;
