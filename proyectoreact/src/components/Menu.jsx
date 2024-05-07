import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="md">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Personas" id="basic-nav-dropdown">
                            <NavLink end  className={"dropdown-item"} to="/personas/create" >Crear Persona</NavLink>
                            <NavLink end className={"dropdown-item"} to="/personas">
                                Lista de Personas
                            </NavLink>
                        </NavDropdown>
                        <NavDropdown title="Mascotas" id="basic-nav-dropdown">
                            <NavLink end  className={"dropdown-item"} to="/mascotas/create" >Crear Mascota</NavLink>
                            <NavLink end  className={"dropdown-item"} to="/mascotas">
                                Lista de Mascotas
                            </NavLink>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default Menu;