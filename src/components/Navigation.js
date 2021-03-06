import { Container, Nav, Navbar } from "react-bootstrap"

const Navigation = (props)=>{console.log(props.getUser())
    //const user = JSON.parse(props.getUser())
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
                <Container fluid>
                    <Navbar.Brand href="#home">WeBe Api Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/gallery">WeGallery</Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                        {/* <Nav.Link href="#deets">{user.name}</Nav.Link> */}
                        <Nav.Link eventKey={2} href="#memes">
                            
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navigation