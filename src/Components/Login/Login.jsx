import React, { useRef, useContext, useState } from 'react';
import { login } from '../../Authentication';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
    const userNameRef = useRef(null);
    const [auth, setAuth] = useContext(AuthContext);
    const [error, setError] = useState(null);
    const handleLogin = () => {
        const result = login(userNameRef.current.value);
        setAuth(result.authToken);
        if (!result.response.success) {
            setError({ message: result.response.message });
        }else{
            //resetting error 
            setError(null);
        }
    }
    return (
        <div className="login-parent">
            <input type="text" placeholder="Username" ref={userNameRef} className="textBox"></input>
            <div className="errorText">{error && error.message ? error.message : null}</div>
            <button onClick={() => handleLogin()} className="button loginButton">Login</button>
        </div>
    );
}
export default Login;