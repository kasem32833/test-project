import {  createContext,  useEffect,  useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProviders = ({children}) => {
    const [user, setUser] =  useState(null);
    const [loading, setLoading] = useState(true);

    const googleAuthProvider = new GoogleAuthProvider();


    const register = (email, password)=>{
       setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
         return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);

        })
        return ()=>{
            return unSubscribe;
        }
    },[])



   const authInfo = {
        register,
        logIn,
        googleLogin,
        logOut,
        user,
        loading,

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;