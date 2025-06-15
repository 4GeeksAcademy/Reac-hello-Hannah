import React, { useState, useEffect } from "react";
import { GetAllUsers, CrearUsuario, GetTareas, CrearTarea } from "../../services/fetchs"








const Home = () => {

  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [respOk, setRespOk] = useState(false);
  const userName = "hannah"
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState("");


  useEffect(() => {
    ObtenerUsuarios()
  }, []);
  useEffect(() => {
    if (respOk === false) return;
    const existeUsuario = listaUsuarios.some((u) => u.name === userName);
    if (!existeUsuario) {
      CrearUsuario(userName)
    }
    else {
      GetTareas(userName).then(setListaTareas)

    }
  }, [listaUsuarios]);

  const ObtenerUsuarios = async () => {
    const lista = await GetAllUsers();
    setListaUsuarios(lista);
    if (listaUsuarios) {
      setRespOk(true)
    }
  }

  const nuevaTarea = async (userName, tarea) => {
    if (!tarea) return;
    const nuevaTarea = await CrearTarea(userName, tarea);
    setListaTareas([...listaTareas, nuevaTarea]);
    setTarea("");
  };
  console.log(listaTareas);
  console.log(tarea);



  return (
    <div className="container mt-5 col-md-6">
      <h1 className="text-center text-danger">TODOS</h1>
        <input

          placeholder="Escribe una tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              nuevaTarea(tarea, userName);
            }
          }}
        ></input>
      


    </div>

  );
};

export default Home;