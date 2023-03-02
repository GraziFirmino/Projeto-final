import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Renova</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sobre">
                        <Nav.Link>Sobre</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/funcionalidades">
                        <Nav.Link>Funcionalidades</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>Contato</Nav.Link>
                    </LinkContainer>

                    // tentativa de adicionar a página FAQ trecho originalmente não tem no codigo 
                    <LinkContainer to="/FAQ">
                        <Nav.Link>FAQ</Nav.Link>
                    </LinkContainer>

                    // fim tentativa de adicionar a página FAQ 


                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Menu;

