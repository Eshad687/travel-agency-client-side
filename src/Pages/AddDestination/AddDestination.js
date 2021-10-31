import axios from 'axios';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AddDestination = () => {

    // SENDING OFFERINGS DATA TO THE DATABASE
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://guarded-everglades-56009.herokuapp.com/offerings', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    alert('destination added successfully')

                }
            })
    };
    return (
        <div>
            <Header>{"bg-dark"}</Header>

            {/* OFFERINGS ADDITION FORM */}
            <Container className="my-5">
                <form className="py-3 w-75 mx-auto shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">ADD A TOURIST ATTRACTION</h2>
                    <Row className="px-2 mx-2 mx-md-5 bg-white py-3 rounded-3">
                        <h6 className="text-primary">Add Name</h6>
                        <input className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("name")} />

                        {errors.name && <small>This field is required</small>}
                        <h6 className="text-primary">Add Description</h6>
                        <textarea rows="5" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("desc")} />

                        {errors.desc && <small>This field is required</small>}

                        <h6 className="text-primary">Add Price</h6>
                        <input type="number" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("price", { required: true })} />

                        {errors.price && <small>This field is required</small>}
                        <h6 className="text-primary">Add image URL</h6>
                        <input className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("img", { required: true })} />

                        {errors.img && <small>This field is required</small>}

                        <input className=" bg-success text-white border-0 rounded py-2 mt-4" type="submit" defaultValue="Add to database" />
                    </Row>
                </form>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AddDestination;