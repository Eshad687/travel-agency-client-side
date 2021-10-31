import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Login = () => {

    const { loginWithGoogle, setIsLoading } = useAuth();

    // TAKING BACK TO DESIRED ROUTE AFTER LOGIN
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {

            }).finally(() => setIsLoading(false))
    }
    return (
        <>
            <Header>{"bg-dark"}</Header>
            <Container className="text-center my-2 py-3">
                <h2 className="text-center section-heading mb-4">PLEASE <span className="text-warning">LOGIN</span> </h2>

                {/* GOOGLE LOGIN BUTTON */}
                <Button onClick={handleGoogleLogin} className="mt-2 other-sign-in-btn rounded-pill border fw-bold" variant="white">
                    <div className="d-flex justify-content-between">


                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                        <span className="mx-5">Sign in with Google</span>
                        <span></span>
                    </div>
                </Button>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;