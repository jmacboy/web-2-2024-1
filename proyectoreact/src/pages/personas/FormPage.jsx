import { useEffect, useState } from "react";
import LabelBS from "../../components/LabelBS";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormPage = () => {
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
                setFechaNacimiento(persona.fechaNacimiento.substring(0, 10));
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
                    navigate('/')
                })
        } else {
            axios.post(import.meta.env.VITE_BASE_URL + 'personas', persona)
                .then(() => {
                    navigate('/')
                })
        }
    }

    return (
        <form>
            <div>
                <LabelBS text="Nombre" />
                <input type="text" value={nombre} onChange={(e) => {
                    setNombre(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Apellido" />
                <input type="text" value={apellido} onChange={(e) => {
                    setApellido(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Email" />
                <input type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Teléfono" />
                <input type="text" value={telefono} onChange={(e) => {
                    setTelefono(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Edad" />
                <input type="number" value={edad} onChange={(e) => {
                    setEdad(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Fecha de Nacimiento" />
                <input type="date" value={fechaNacimiento} onChange={(e) => {
                    setFechaNacimiento(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Género" />
                <select onChange={(e) => {
                    setGenero(e.target.value)
                }}>
                    <option value="1">Masculino</option>
                    <option value="-1">Femenino</option>
                    <option value="0">Indefinido</option>
                </select>
            </div>
            <div>
                Tu nombre es: {nombre}  {apellido}
            </div>
            <div>
                <button onClick={enviarDatos}>Guardar</button>
            </div>
        </form>
    );
}

export default FormPage;