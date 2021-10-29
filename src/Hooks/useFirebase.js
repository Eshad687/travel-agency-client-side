import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import initializeAuthorization from "../Firebase/firebase.init";



initializeAuthorization();
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [erorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null)
            }
            setIsLoading(false)
        });
    }, [])

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    }



    return {
        user,
        erorMessage,
        isLoading,
        setErrorMessage,
        setIsLoading,
        loginWithGoogle,
        logOut
    }
}
export default useFirebase;




