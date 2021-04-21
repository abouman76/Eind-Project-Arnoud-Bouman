import {createContext, useContext, useState} from "react";

export const LoginAuth = createContext({});

const LoginContext = (props) => {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return <LoginAuth.Provider value={{isAuthenticated, setIsAuthenticated, token, setToken}}>
            {props.children}
            </LoginAuth.Provider>
}

export const useAuth = () => {
    return useContext(LoginAuth);
}

export default LoginContext;