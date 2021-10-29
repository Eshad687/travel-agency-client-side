import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useOfferings from '../../Hooks/useOfferings';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const OfferingDetails = () => {
    const { offers } = useOfferings();
    const { id } = useParams();


    const offering = offers?.find(offer => offer._id === id);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div style={{
            backgroundImage: `url(${offering?.img}),linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
            backgroundBlendMode: "overlay",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "780px",
            width: "100%"
        }}>
            <Header></Header>
            <Container className="mt-5">
                <Row>
                    <Col md={6} className="text-white">
                        <img className="w-100 rounded-3 border border-3 border-warning p-2" src={offering?.img} alt="" />
                        <br />
                        <h4>{offering?.name}</h4>
                        <p>{offering?.desc}</p>
                        <h4 className="text-danger">Price: ${offering?.price}</h4>
                    </Col>

                    <Col md={6}>
                        <form className="py-3" onSubmit={handleSubmit(onSubmit)}>
                            <Row className="px-2 mx-2 mx-md-5 bg-white py-3 rounded-3">
                                <h6 className="text-muted">Package Name</h6>
                                <input defaultValue={offering?.name} className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("PackageName")} />

                                {errors.PackageName && <small>This field is required</small>}
                                <h6 className="text-muted">Your Name</h6>
                                <input className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("yourName")} />

                                {errors.yourName && <small>This field is required</small>}

                                <h6 className="text-muted">Phone</h6>
                                <input type="number" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("phone", { required: true })} />

                                {errors.phone && <small>This field is required</small>}


                                <h6 className="text-muted">Date</h6>
                                <input type="date" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("date", { required: true })} />

                                {errors.date && <small>This field is required</small>}



                                <input className=" bg-success text-white border-0 rounded py-2 mt-4" type="submit" />
                            </Row>
                        </form>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default OfferingDetails;