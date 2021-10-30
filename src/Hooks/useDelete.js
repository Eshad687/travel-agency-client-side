import axios from "axios";
import { useState } from "react";

const useDelete = () => {
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            axios.delete(`http://localhost:5000/bookings/${id}`)
                .then(res => {

                    if (res.data.deletedCount > 0) {

                        setIsDeleted(res.data.deletedCount);
                        alert('delete successfull')
                    }
                })
        }
    }
    return {
        isDeleted,
        handleDelete
    }

}
export default useDelete;
