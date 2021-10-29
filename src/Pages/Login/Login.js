import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { loginWithGoogle, setIsLoading } = useAuth();
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
        <div className="text-center mt-5 pt-5">
            <Button onClick={handleGoogleLogin} className="mt-2 other-sign-in-btn rounded-pill border w-25" variant="white">
                <div className="d-flex justify-content-between">


                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <span className="">Sign in with Google</span>
                    <span></span>
                </div>
            </Button>
        </div>
    );
};

export default Login;