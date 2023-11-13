import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	const agregarElemento = () => {
		if (tarea.trim() !== "") {
			setLista([...lista, tarea])
			setTarea("")
		} else {
			alert("Ingrese algo")
		}
	};
	const Enter = (e) => {
		if (e.key === "Enter") {
			agregarElemento();
		}

	}

	const Eliminar = (index) => {
		const nuevaLista = [...lista];
		nuevaLista.splice(index, 1);
		setLista(nuevaLista);
	};


	return (
		<div className="container-fluid">
		<div className="row justify-content-center align-items-center" >
		  <div className="col-md-4">
			<div className="text-center card h-100">
			  <p>todos</p>
			  
  
			  <ul className="list-group mt-3 " >
				<li className="list-group-item">
				  <input
					className="ms-5 border-none"
					type="text"
					onChange={(e) => setTarea(e.target.value)}
					value={tarea}
					onKeyDownCapture={Enter}
					placeholder="Pone algo "
				  />
				</li>
  
				{lista.map((tarea, index) => (
				  <li key={index} className=" list-group-item d-flex justify-content-between align-items-center">
					<p>{tarea}</p>
					<i class="fa-solid fa-x" style={{color: '#ff0000'}} key={index} onClick={Eliminar}></i>
				  </li>
				))}
			  </ul>
  
			  <div className="card-footer" >
				<small className="text-body-secondary">Hay {lista.length} actividades por hacer</small>
			  </div>
			</div>
		  </div>
		</div>
	  </div>

      
	);
};

export default Home;

