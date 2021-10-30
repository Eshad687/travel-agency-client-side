import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';


import useAuth from '../../Hooks/useAuth';
import useDelete from '../../Hooks/useDelete';



import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './MyBookings.css'

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useAuth();
    const { isDeleted, handleDelete } = useDelete();

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings/${user?.email}`)
            .then(res => setMyBookings(res.data))
    }, [isDeleted])

    return (
        <div>
            <Header>{"bg-dark"}</Header>
            <div className="m-5">
                <h1 className="text-center">MY BOOKINGS</h1>
                <Row xs={1} md={3} className="g-2 mt-3">
                    {
                        myBookings?.map(booking => <Col key={booking._id}>
                            <Card className="bg-dark text-white border-0 ">
                                <Card.Img className="mybooking-img rounded" style={{ filter: "brightness(0.5)" }} src={booking?.img} alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center text-center p-1">
                                    <div className=" card-details mt-5  py-2 rounded">
                                        <Card.Title>{booking.packageName}</Card.Title>
                                        <hr />
                                        <Card.Text className="bg-warning my-1 w-75 py-2 mx-auto rounded">
                                            {booking.status.toUpperCase()}
                                        </Card.Text>
                                        <Card.Text>
                                            <Button onClick={() => handleDelete(booking._id)} variant="danger w-50">Delete</Button>
                                        </Card.Text>

                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        )}
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBookings;