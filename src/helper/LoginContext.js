import {createContext, useContext, useEffect, useState} from "react";

// Firebase Config:
import app from "../modules/Firebase";

export const LoginAuth = createContext({});

const LoginContext = (props) => {
    const [authUser, setAuthUser] = useState(null);
    const [fireBaseError, setFireBaseError] = useState("")

    useEffect(()=> {
       const getUser = async () => {

           try {
               const userApp  =  await app.auth().onAuthStateChanged((user) => {
                   if(user) {
                       setAuthUser(user);
                   } else {
                       setAuthUser(null);
                   }
                   console.log("USER APP", user);
               })
           } catch (error) {
               console.error(error);
           }

       }
       getUser();

    }, [])
    const login = async (data) => {
        try {
            const response = await app.auth().signInWithEmailAndPassword(data.email, data.password);
            return response;

        } catch (e) {
            console.error("ERROR", e.message);
            setFireBaseError(fireBaseError);
        }
    }

    const logOut = () => {
        app.auth().signOut()
    }

    const valueProvider = {
        authUser,
        setAuthUser,
        fireBaseError,
        login,
        logOut
    }

    return <LoginAuth.Provider value={valueProvider}>
            {props.children}
            </LoginAuth.Provider>
}

export const useAuth = () => {
    return useContext(LoginAuth);
}

export default LoginContext;