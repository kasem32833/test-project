import { Children, createContext,  useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProviders = ({children}) => {
    const [user, setUser] =  useState(null);


    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const logIn = (email, password) => {

         return signInWithEmailAndPassword(auth, email, password)
    }

   const  authInfo = {
        register,
        logIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;