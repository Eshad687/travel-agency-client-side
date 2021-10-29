import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AddDestination = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Header>{"bg-dark"}</Header>
            <Container className="my-5">
                <form className="py-3 w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <Row className="px-2 mx-2 mx-md-5 bg-white py-3 rounded-3">
                        <h6 className="text-muted">Add Name</h6>
                        <input className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("addName")} />

                        {errors.addName && <small>This field is required</small>}
                        <h6 className="text-muted">Add Description</h6>
                        <textarea rows="5" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("addDescription")} />

                        {errors.addDescription && <small>This field is required</small>}

                        <h6 className="text-muted">Add Price</h6>
                        <input type="number" className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("addPrice", { required: true })} />

                        {errors.addPrice && <small>This field is required</small>}
                        <h6 className="text-muted">Add image URL</h6>
                        <input className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("addImage", { required: true })} />

                        {errors.addImage && <small>This field is required</small>}





                        <input className=" bg-success text-white border-0 rounded py-2 mt-4" type="submit" />
                    </Row>
                </form>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AddDestination;