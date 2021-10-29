import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhoneSquareAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="pt-5">
            <div className="bg-dark mt-5">
                <Container className="text-muted py-5">
                    <p className="text-center">Subscribe for getting news and offers</p>
                    <InputGroup className="mb-3 w-50 mx-auto">
                        <FormControl
                            placeholder="Enter Email"

                        />
                        <Button variant="danger">
                            Subscribe
                        </Button>
                    </InputGroup>
                    <Row className="mt-5">
                        <Col xs={6} md={2}>
                            <h5>About Us</h5>
                            <small>Our staffs</small>
                            <br />
                            <small>Our journey</small>
                            <br />
                            <small>How we started</small>
                            <br />
                            <small>Aim of Into the wilds</small>
                            <br />
                            <small>Message from the CEO</small>


                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Contact Us</h5>
                            <span><FontAwesomeIcon icon={faMailBulk} /> Email us at</span>
                            <br />
                            <small >HouseGenaral@house.com</small>
                            <br />



                            <span><FontAwesomeIcon icon={faPhoneSquareAlt} /> Call us at</span>
                            <br />
                            <small>+8897634567</small>
                            <br />
                            <small>+8897634568</small>
                            <br />
                            <small>+8897634565</small>
                            <br />
                            <small>+8897634564</small>
                            <br />

                            <span><FontAwesomeIcon icon={faAddressCard} /> Address</span>
                            <br />
                            <small>New Eskaton Road, Dhaka 1207, Dhaka, Bangladesh</small>



                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Hotels</h5>
                            <ul>
                                <li>Sheraton</li>
                                <li>Pan Pacific</li>
                                <li>Paradise</li>
                                <li>Bromwitc</li>
                                <li>Manchester</li>
                                <li>Copenhegen</li>
                                <li>Queens</li>
                            </ul>
                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Restaurants</h5>
                            <ul>
                                <li>Continental</li>
                                <li>Paris Restaurant</li>
                                <li>Bismillah Restaurant</li>
                                <li>Grand kabab</li>
                            </ul>
                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Blog Posts</h5>
                            <ul>
                                <li>African Wild-life</li>
                                <li>Pacific past time</li>
                                <li>Once at a desert</li>
                                <li>Live life young</li>
                            </ul>
                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Quick links</h5>
                            <ul>
                                <li>Events</li>
                                <li>Mentors</li>
                                <li>Galleries</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;