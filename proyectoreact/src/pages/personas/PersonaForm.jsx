import { useEffect, useState } from "react";
import LabelBS from "../../components/LabelBS";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import { Button, Card, Col, Container, FormControl, FormSelect, Row } from "react-bootstrap";
import moment from "moment";

const PersonaForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [edad, setEdad] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [telefono, setTelefono] = useState('')
    const [genero, setGenero] = useState('1')

    useEffect(() => {
        if (!id) return;
        fetchPersona();
    }, [id])
    const fetchPersona = () => {
        axios.get(import.meta.env.VITE_BASE_URL + 'personas/' + id)
            .then((res) => {
                const persona = res.data;
                setNombre(persona.nombre);
                setApellido(persona.apellido);
                setEmail(persona.email);
                setEdad(persona.edad);
                setFechaNacimiento(moment.utc(persona.fechaNacimiento).format('YYYY-MM-DD'));
                setTelefono(persona.telefono);
                setGenero(persona.genero);
            });
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        const persona = {
            nombre,
            apellido,
            email,
            edad,
            fechaNacimiento,
            telefono,
            genero
        }
        if (id) {
            axios.put(import.meta.env.VITE_BASE_URL + 'personas/' + id, persona)
                .then(() => {
                    navigate('/personas')
                })
        } else {
            axios.post(import.meta.env.VITE_BASE_URL + 'personas', persona)
                .then(() => {
                    navigate('/personas')
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
                                    <h1>Formulario de Personas</h1>
                                </Card.Title>
                                <form>
                                <div>
                                        <LabelBS text="Nombre" />
                                        <FormControl type="text" value={nombre} onChange={(e) => {
                                            setNombre(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Apellido" />
                                        <FormControl type="text" value={apellido} onChange={(e) => {
                                            setApellido(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Email" />
                                        <FormControl type="email" value={email} onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Teléfono" />
                                        <FormControl type="text" value={telefono} onChange={(e) => {
                                            setTelefono(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Edad" />
                                        <FormControl type="number" value={edad} onChange={(e) => {
                                            setEdad(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Fecha de Nacimiento" />
                                        <FormControl type="date" value={fechaNacimiento} onChange={(e) => {
                                            setFechaNacimiento(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Género" />
                                        <FormSelect value={genero} onChange={(e) => {
                                            setGenero(e.target.value)
                                        }}>
                                            <option value="1">Masculino</option>
                                            <option value="-1">Femenino</option>
                                            <option value="0">Indefinido</option>
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

export default PersonaForm;