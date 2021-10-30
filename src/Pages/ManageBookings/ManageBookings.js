import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import useDelete from '../../Hooks/useDelete';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faTrashAlt, } from '@fortawesome/free-solid-svg-icons'
import './ManageBookings.css';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [isApproved, setIsApproved] = useState(false);

    const { isDeleted, handleDelete } = useDelete();
    useEffect(() => {
        axios.get('https://guarded-everglades-56009.herokuapp.com/bookings')
            .then(res => setBookings(res.data))
    }, [isApproved, isDeleted])

    const handleApprove = (id) => {
        axios.put(`https://guarded-everglades-56009.herokuapp.com/bookings/${id}`, { status: "approved" })
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    setIsApproved(true)
                    alert('Updated product successfully');

                }
            })

    }

    return (
        <div>
            <Header>{"bg-dark"}</Header>
            <Container className="my-5">
                <h1 className="text-center">Manage Bookings</h1>
                {
                    bookings?.map(booking => <div style={booking.status === 'pending' ? { backgroundColor: 'orange' } : { backgroundColor: 'darkslateblue' }} key={booking._id} className="d-flex justify-content-between align-items-center mt-2 p-2 text-white rounded-3 artist-box">
                        <h5>{bookings.indexOf(booking) + 1}.</h5>
                        <h5>{booking.name}</h5>
                        <h5>{booking.email}</h5>
                        <h5>{booking.packageName}</h5>
                        <h5>{booking.status.toUpperCase()}</h5>
                        <div>
                            <Button onClick={() => handleApprove(booking._id)} variant="success">Approve <FontAwesomeIcon icon={faCheckDouble} /></Button>
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