import { useState } from "react";
import LabelBS from "./LabelBS";

const FormPage = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [edad, setEdad] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const enviarDatos = (e) => {
        e.preventDefault();
        console.log({
            nombre,
            apellido,
            ciudad,
            edad,
            fechaNacimiento
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
                <LabelBS text="Ciudad" />
                <input type="text" onChange={(e) => {
                    setCiudad(e.target.value)
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
                Tu nombre es: {nombre}  {apellido}
            </div>
            <div>
                <button onClick={enviarDatos}>Guardar</button>
            </div>
        </form>
    );
}

export default FormPage;