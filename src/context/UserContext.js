import React, { createContext, useState } from 'react'
import { navigate } from "gatsby"

export const UserContext = createContext(null);

const getAuthInfo = () => {
    try {
        const authInfo = JSON.parse(localStorage.getItem('authInfo'))
        if (authInfo) {
            return authInfo
        }

    } catch (err) {
        return null
    }

    return null
}

const saveAuthInfo = (authInfo) => {
    localStorage.setItem('authInfo', JSON.stringify(authInfo));
};

const clearAuthInfo = () => {
    localStorage.removeItem('authInfo');
};

export default ({ children }) => {
    const [authInfo, setAuthInfo] = useState(getAuthInfo())

    const addAuthDetails = ({ jwt, user }) => {
        const userDetails = {
            jwt,
            user
        };
        setAuthInfo(userDetails);
        saveAuthInfo(userDetails);
    };

    const logout = () => {
        setAuthInfo(null);
        clearAuthInfo();
        navigate('/');
    };

    return (
        <UserContext.Provider value={{ authInfo, logout, addAuthDetails }}>
            {children}
        </UserContext.Provider>
    )
}