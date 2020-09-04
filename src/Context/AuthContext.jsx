import React, { useState, createContext } from 'react';
import {getAuthToken} from '../Authentication';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    //setting default auth data to context
    const [auth,setAuth] = useState(getAuthToken());

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
}