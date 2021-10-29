import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Offering.css'
import { useHistory } from 'react-router';
const Offering = ({ offer }) => {
    const { name, desc, img, _id } = offer;
    const history = useHistory()
    const handleBookNow = (id) => {
        history.push(`/offerings/${id}`)
    }
    return (
        <Col>
            <Card className="bg-dark text-white border-0 ">
                <Card.Img className="offering-img" style={{ filter: "brightness(0.5)" }} src={img} alt="Card image" />
                <Card.ImgOverlay className="d-flex align-items-end">
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {desc.slice(0, 80) + " ..."}
                        </Card.Text>
                        <Card.Text><Button onClick={() => handleBookNow(_id)} variant="outline-light">Book Now <FontAwesomeIcon icon={faArrowRight} /></Button></Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Offering;