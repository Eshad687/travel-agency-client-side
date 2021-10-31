import axios from 'axios';
import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useOfferings from '../../Hooks/useOfferings';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const OfferingDetails = () => {

    // GETTING DATA FROM CUSTOM HOOK
    const { offers } = useOfferings();
    const { id } = useParams();
    const { user } = useAuth();

    // SENDING BOOKING DATA TO THE DATABASE
    const offering = offers?.find(offer => offer._id === id);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.status = "pending";
        data.img = offering?.img;
        axios.post('https://guarded-everglades-56009.herokuapp.com/bookings', data)
            .then(res => {
                console.log(res.data.insertedId)
                if (res.data.insertedId) {
                    reset();
                    alert('Booking is pending')

                }
            })
    };


    return (
        // SET THE BACKGROUND OF THE PAGE
        <div style={{
            backgroundImage: `url(${offering?.img}),linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
            backgroundBlendMode: "overlay",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "850px",
            width: "100%"
        }}>
            <Header></Header>
            <Container >
                {offers.length === 0 ? <div className="mx-auto">
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                </div> :
                    // {/* OFFERING INFORMATION */}
                    <>
                        <Row>
                            <Col md={6} className="text-white mt-5">
                                <img className="w-100 rounded-3 border border-3 border-warning p-2" src={offering?.img} alt="" />
                                <br />
                                <h4>{offering?.name}</h4>
                                <p>{offering?.desc}</p>
                                <h4 className="text-white bg-danger w-50 p-2 text-center rounded-pill">Price: ${offering?.price}</h4>
                            </Col>

                            {/* BOOKING FORM */}
                            <Col md={6} className="mt-4">
                                <form className="py-3" onSubmit={handleSubmit(onSubmit)}>

                                    <Row className="px-3 mx-2 mx-md-5 bg-white py-3 rounded-3">
                                        <h4 className="text-center mt-2 mb-4 text-primary fw-bold">BOOK YOUR TRIP</h4>
                                        <h6 className="text-muted">Your Name</h6>
                                        <input defaultValue={user?.displayName} className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("name")} />

                                        {errors.name && <small>This field is required</small>}
                                        <h6 className="text-muted">Your Email</h6>
                                        <input type="email" defaultValue={user?.email} className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("email")} />

                                        {errors.email && <small>This field is required</small>}
                                        {offering?.name && <>
                                            <h6 className="text-muted">Package Name</h6>
                                            <input defaultValue={offering.name} className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("packageName")} />

                                            {errors.packageName && <small>This field is required</small>}

                                        </>}


                                        <h6 className="text-muted">Phone</h6>
                                        <input type="number" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("phone", { required: true })} />

                                        {errors.phone && <small>This field is required</small>}


                                        <h6 className="text-muted">Date</h6>
                                        <input type="date" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("date", { required: true })} />

                                        {errors.date && <small>This field is required</small>}


                                        <h6 className="text-muted">Gender</h6>
                                        <select className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("gender")}>
                                            <option value="female">female</option>
                                            <option value="male">male</option>
                                            <option value="other">other</option>
                                        </select>

                                        {errors.gender && <small>This field is required</small>}

                                        <h6 className="text-muted">Age</h6>
                                        <input type="number" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("age", { required: true })} />

                                        {errors.age && <small>This field is required</small>}



                                        <input className="btn bg-success text-white border-0 rounded py-2 mt-4 fw-bold" type="submit" />
                                    </Row>
                                </form>

                            </Col>
                        </Row>
                    </>
                }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default OfferingDetails;