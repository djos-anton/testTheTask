import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="black">
                <Container>
                    <Navbar.Brand href="/">
                        Invoice App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/customers">Customers</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                </>
        </div>
    );
}

export default Header;