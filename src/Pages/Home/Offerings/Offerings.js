import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Offering from '../Offering/Offering';
import './Offerings.css'

const Offerings = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('/try.json')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <Container id="offerings" className="mt-5">
            <h2 className="text-center section-heading">WHAT WE ARE <span className="text-warning">OFFERING</span> </h2>
            <Row xs={1} md={3} className="g-4 mt-3">
                {
                    offers?.map(offer => <Offering
                        key={offer.name}
                        offer={offer}
                    ></Offering>)
                }
            </Row>

        </Container>
    );
};

export default Offerings;