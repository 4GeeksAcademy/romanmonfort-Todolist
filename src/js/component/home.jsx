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
		<div className="text-center">
			<h1>TODO</h1>
			<div className="d-flex justify-content-center align-items-center">
				<input
					type="text"
					onChange={(e) => setTarea(e.target.value)}
					value={tarea}
					onKeyDownCapture={Enter}
				/>
			</div>
			<ul className="list-group mt-3">
				{lista.map((tarea, index) => (
					<li key={index} className="list-group-item">
						{tarea}<button key={index} className="ms-5 btn btn-danger" onClick={Eliminar} >X</button>
					</li>
				))}
			</ul>
		</div>


	);
};

export default Home;

