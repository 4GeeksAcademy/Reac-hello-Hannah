import React, { useState } from "react";
import List from "./List";
const Home = () => {
  const [tasks, setTasks] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setTasks([...tasks, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container mt-5 col-md-6">
      <h1 className="text-center text-danger">TODOS</h1>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Escribe una tarea y presiona Enter"
        onKeyDown={handleKeyPress}
      />
      <List tasks={tasks} onDelete={deleteTask} />
      <div className="text-muted mt-3">
        {tasks.length === 0 ? "No hay tareas, añadir tareas" : `${tasks.length} tareas`}
      </div>
    </div>
  );
};

export default Home;