import {createContext, useContext, useState} from "react";

// Firebase Config:
import app from "../modules/Firebase";

export const LoginAuth = createContext({});

const LoginContext = (props) => {
    // const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [fireBaseError, setFireBaseError] = useState("")

    // if(token) {
    //     // localStorage.setItem("token", token)
    //     setIsAuthenticated(true);
    // }

    const login = async (data) => {
        try {
            const response = await app.auth().signInWithEmailAndPassword(data.email, data.password);
            // console.log("TOKEN", response.user.za);
            // setToken(response.user.za)
            setIsAuthenticated(true);
            return response;

        } catch (e) {
            console.error("ERROR", e.message);
            setFireBaseError(fireBaseError);
        }
    }

    return <LoginAuth.Provider value={{isAuthenticated, setIsAuthenticated, fireBaseError, login}}>
            {props.children}
            </LoginAuth.Provider>
}

export const useAuth = () => {
    return useContext(LoginAuth);
}

export default LoginContext;