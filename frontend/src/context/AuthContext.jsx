import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setauthUser] = useState(localStorage.getItem('chat-user') || null);

    return <AuthContext.Provider value={{ authUser, setauthUser }}>{children}</AuthContext.Provider>;
}