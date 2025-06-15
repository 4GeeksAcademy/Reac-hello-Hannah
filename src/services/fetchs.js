const urlBase = "https://playground.4geeks.com/todo/";

export const GetAllUsers = async () => {
  try {
    const response = await fetch(`${urlBase}users`);
    if (!response.ok) {
      throw new Error("error al obtener los usuarios");
    }
    const data = await response.json();

    return data.users;
  } catch (error) {
    console.log("error al obtener los usuarios:", error);
  }
};

export const CrearUsuario = async (userName) => {
  try {
    const response = await fetch(`${urlBase}users/${userName}`, {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
    });
    return alert("usuario creado correctamente");
  } catch (error) {
    console.log("error al crear el usuario:", error);
  }
};

export const CrearTarea = async (tarea, userName) => {
  try {
    const response = await fetch(`${urlBase}todos/${userName}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: tarea, is_done: false }),
    });
    if (!response.ok) throw new Error("Error al crear la tarea");
    else return alert(`Tarea creada exitosamente`);
  } catch (error) {
    alert("Error al crear la tarea");
  }
};

export const GetTareas = async (userName) => {
  try {
    const response = await fetch(`${urlBase}users/${userName}`);
    if (!response.ok) {
      throw new Error("error al obtener las tareas");
    }
    const data = await response.json();

    return data.todos;
  } catch (error) {
    console.log("error al obtener las tareas:", error);
  }
};

export const EliminarTarea = async (id) => {
  try {
    const response = await fetch(`${urlBase}todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "aplication/json" },
    });
    return alert("tarea eliminada correctamente");
  } catch (error) {
    console.log("error al eliminar la tarea:", error);
  }
};
