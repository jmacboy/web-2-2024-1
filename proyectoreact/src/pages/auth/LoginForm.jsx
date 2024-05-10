import { useState } from "react";
import LabelBS from "../../components/LabelBS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import { Button, Card, Col, Container, FormControl, Row } from "react-bootstrap";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const enviarDatos = (e) => {
        e.preventDefault();
        const persona = {
            email,
            password
        }

        axios.post(import.meta.env.VITE_BASE_URL + 'login', persona)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                navigate('/personas')
            })
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
                                    <h1>Iniciar sesión</h1>
                                </Card.Title>
                                <form>
                                    <div>
                                        <LabelBS text="Nombre" />
                                        <FormControl type="email" value={email} onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <LabelBS text="Contraseña" />
                                        <FormControl type="password" value={password} onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <Button onClick={enviarDatos}>Iniciar sesión</Button>
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

export default LoginForm;