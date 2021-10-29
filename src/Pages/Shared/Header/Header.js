import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/CcRLeTdR-removebg-preview.png'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ filter: "brightness(20)" }} height="90px" width="120px" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#offerings">Offers</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#traveler">Review</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#community">Community</Nav.Link>
                            {user?.email && <>
                                <Nav.Link as={NavLink} to="/mybookings">My Bookings</Nav.Link>
                                <Nav.Link as={NavLink} to="/managebookings">Manage Bookings</Nav.Link>
                                <Nav.Link as={NavLink} to="/addDestination">Add Destination</Nav.Link>
                            </>}
                            {user?.email && <span className="text-white mx-3 my-auto">{user.displayName}</span>}
                            {
                                user?.email ? <Button variant="danger" onClick={logOut} className="px-3 py-1 rounded-3 border-0 btn">Log out <FontAwesomeIcon icon={faSignOutAlt} /></Button> :
                                    <Nav.Link as={NavLink} to="/login">Login <FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;