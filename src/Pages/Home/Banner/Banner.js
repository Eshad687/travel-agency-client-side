
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Banner = () => {
    return (
        <div className="text-white top-banner ">
            <Header></Header>
            <Container >
                <Row  >
                    <Col className="fw-bolder text-center mt-5 pt-5" sm={6}><h2>IT FEELS GOOD TO BE LOST IN THE <span className="text-warning">RIGHT DIRECTION</span> </h2>
                        <p>Want to travel the world? You are in the right place. Come with us and experience what God had created for you to see in this earth. The world is now in your grasp. You will point the place you want to go. We will make sure it happens</p>
                        <Button variant="danger">See More <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>

                </Row>
            </Container>




        </div>
    );
};

export default Banner;