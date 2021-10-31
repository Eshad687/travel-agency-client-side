import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const NotFound = () => {

    // GO BACK TO HOME ROUTE
    const history = useHistory();
    const handleGoBack = () => {
        history.push('/home')
    }
    return (
        <div className="text-center">
            <img src="https://jonkuhrt.files.wordpress.com/2020/01/error-404-message.png" alt="" />
            <br />
            <br />
            <Button onClick={handleGoBack} variant="primary">Go Back To Home  <FontAwesomeIcon icon={faUndoAlt} /></Button>

        </div>
    );
};

export default NotFound;