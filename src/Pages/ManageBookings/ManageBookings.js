import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import useDelete from '../../Hooks/useDelete';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faTrashAlt, } from '@fortawesome/free-solid-svg-icons'
import './ManageBookings.css';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [isApproved, setIsApproved] = useState(false);

    // GETTING DATA FROM CUSTOM HOOK
    const { isDeleted, handleDelete } = useDelete();

    // GETTING BOOKING DATA FROM THE DATABASE
    useEffect(() => {
        axios.get('https://guarded-everglades-56009.herokuapp.com/bookings')
            .then(res => setBookings(res.data))
    }, [isApproved, isDeleted])

    // UPDATING STATUS OF THE DATA IN THE DATABASE
    const handleApprove = (id) => {
        axios.put(`https://guarded-everglades-56009.herokuapp.com/bookings/${id}`, { status: "approved" })
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    setIsApproved(true)
                    alert('booking is approved');

                }
            })

    }

    return (
        <div>
            <Header>{"bg-dark"}</Header>
            <Container className="my-5">
                <h2 className="text-center section-heading mb-4">MANAGE <span className="text-warning">BOOKINGS</span> </h2>

                {/* ALL BOOKING DATA */}
                {
                    bookings.length === 0 ? <div className="text-center">
                        <Spinner animation="border" variant="success" />
                        <Spinner animation="border" variant="danger" />
                        <Spinner animation="border" variant="warning" />
                        <Spinner animation="border" variant="info" />
                    </div> :
                        bookings.map(booking => <div style={booking.status === 'pending' ? { backgroundColor: 'orange' } : { backgroundColor: 'seagreen' }} key={booking._id} className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-2 p-2 text-white rounded-3 artist-box">
                            <h5>{bookings.indexOf(booking) + 1}.</h5>
                            <h5>{booking.name}</h5>
                            <h5>{booking.email}</h5>
                            <h5>{booking.packageName}</h5>
                            <h5>{booking.status.toUpperCase()}</h5>
                            <div>
                                <Button onClick={() => handleApprove(booking._id)} variant="info">Approve <FontAwesomeIcon icon={faCheckDouble} /></Button>
                                <Button onClick={() => handleDelete(booking._id)} className="mx-2" variant="danger">Delete <FontAwesomeIcon icon={faTrashAlt} /></Button>
                            </div>



                        </div>)
                }

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ManageBookings;