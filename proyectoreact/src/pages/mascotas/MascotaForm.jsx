import { useEffect, useState } from "react";
import LabelBS from "../../components/LabelBS";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import { Button, Card, Col, Container, FormControl, FormSelect, Row } from "react-bootstrap";

const MascotaForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('')
    const [personaId, setPersonaId] = useState('')
    const [tipo, setTipo] = useState('0')
    const [listaPersonas, setListaPersonas] = useState([])

    useEffect(() => {
        fetchListaPersonas();
    }, [])


    useEffect(() => {
        if (!id) return;
        fetchMascota();
    }, [id])
    const fetchListaPersonas = () => {
        axios.get(import.meta.env.VITE_BASE_URL + 'personas')
            .then((res) => {
                setListaPersonas(res.data);
                if (res.data.length > 0) {
                    setPersonaId(res.data[0].id);
                }
            });
    }
    const fetchMascota = () => {
        axios.get(import.meta.env.VITE_BASE_URL + 'mascotas/' + id)
            .then((res) => {
                const mascota = res.data;
                setNombre(mascota.nombre);
                setPersonaId(mascota.persona_id);
                setTipo(mascota.email);
            });
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        const mascota = {
            nombre,
            persona_id: personaId,
            tipo,
        }
        if (id) {
            axios.put(import.meta.env.VITE_BASE_URL + 'mascotas/' + id, mascota)
                .then(() => {
                    navigate('/mascotas')
                })
        } else {
            axios.post(import.meta.env.VITE_BASE_URL + 'mascotas', mascota)
                .then(() => {
                    navigate('/mascotas')
                })
        }
    }

    return (
        <>
            <Menu />
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h1>Formulario de Mascotas</h1>
                                </Card.Title>
                                <form>
                                    <div>
                                        <LabelBS text="Nombre" />
                                        <FormControl type="text" value={nombre} onChange={(e) => {
                                            setNombre(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Dueño" />
                                        <FormSelect value={personaId} onChange={(e) => {
                                            setPersonaId(e.target.value)
                                        }}>
                                            {listaPersonas.map((persona) =>
                                                <option key={"persona-" + persona.id} value={persona.id}>{persona.nombre} {persona.apellido}</option>
                                            )}
                                        </FormSelect>
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Tipo" />
                                        <FormSelect value={tipo} onChange={(e) => {
                                            setTipo(e.target.value)
                                        }}>
                                            <option value="0">Perro</option>
                                            <option value="1">Gato</option>
                                            <option value="2">Loro</option>
                                            <option value="3">Capibara</option>
                                        </FormSelect>
                                    </div>
                                    <div className="mt-2">
                                        <Button onClick={enviarDatos}>Guardar</Button>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MascotaForm;