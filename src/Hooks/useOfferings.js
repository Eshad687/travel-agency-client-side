import axios from "axios";
import { useEffect, useState } from "react";

const useOfferings = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        axios.get('https://guarded-everglades-56009.herokuapp.com/offerings')
            .then(res => setOffers(res.data))

    }, [])

    return {
        offers
    }
}
export default useOfferings;