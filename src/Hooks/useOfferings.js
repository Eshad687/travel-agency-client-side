import axios from "axios";
import { useEffect, useState } from "react";

const useOfferings = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/offerings')
            .then(res => setOffers(res.data))

    }, [])

    return {
        offers
    }
}
export default useOfferings;