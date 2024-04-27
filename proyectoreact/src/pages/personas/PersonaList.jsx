import axios from "axios";
import { useEffect, useState } from "react";

const PersonaList = () => {
    const [personaList, setPersonaList] = useState([])

    useEffect(() => {
        fetchListaPersonas();
    }, [])


    const fetchListaPersonas = () => {
        axios.get(import.meta.env.VITE_BASE_URL + 'personas')
            .then((res) => {
                setPersonaList(res.data);
            });
    }
    return (<div>
        <h1>Lista de Personas</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Edad</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Género</th>
                </tr>
            </thead>
            <tbody>
                {personaList.map((persona) =>
                    <tr key={"persona-" + persona.id}>
                        <td>{persona.id}</td>
                        <td>{persona.nombre}</td>
                        <td>{persona.apellido}</td>
                        <td>{persona.email}</td>
                        <td>{persona.telefono}</td>
                        <td>{persona.edad}</td>
                        <td>{persona.fechaNacimiento}</td>
                        <td>{persona.genero}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>);
}

export default PersonaList;