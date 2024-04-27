import { useState } from "react";
import LabelBS from "../../components/LabelBS";
import axios from "axios";

const FormPage = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [edad, setEdad] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [telefono, setTelefono] = useState('')
    const [genero, setGenero] = useState('1')
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
        axios.post('http://localhost:3000/api/personas', persona)
            .then((response) => {
                console.log(response.data)
            })
    }
    return (
        <form>
            <div>
                <LabelBS text="Nombre" />
                <input type="text" onChange={(e) => {
                    setNombre(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Apellido" />
                <input type="text" onChange={(e) => {
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
                <input type="number" onChange={(e) => {
                    setEdad(e.target.value)
                }} />
            </div>
            <div>
                <LabelBS text="Fecha de Nacimiento" />
                <input type="date" onChange={(e) => {
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