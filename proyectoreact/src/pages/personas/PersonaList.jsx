import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    const deletePersona = (id) => {
        const confirmation = window.confirm('¿Estás seguro de eliminar esta persona?');
        if (!confirmation) return;
        axios.delete(import.meta.env.VITE_BASE_URL + 'personas/' + id)
            .then(() => {
                fetchListaPersonas();
            });
    }
    return (
        <Container>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h1>Lista de Personas</h1>
                            </Card.Title>
                            <Table>
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
                                        <th></th>
                                        <th></th>
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
                                            <td><Link className="btn btn-primary" to={"/personas/" + persona.id}>Editar</Link></td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => deletePersona(persona.id)}>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>);
}

export default PersonaList;