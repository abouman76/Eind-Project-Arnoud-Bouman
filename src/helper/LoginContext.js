import {createContext, useContext, useState} from "react";

export const LoginAuth = createContext({});

const LoginContext = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return <LoginAuth.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {props.children}
            </LoginAuth.Provider>
}

export const useAuth = () => {
    return useContext(LoginAuth);
}

export default LoginContext;