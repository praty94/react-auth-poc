import React, { useRef, useContext, useState } from 'react';
import { login } from '../../Authentication';
import { AuthContext } from '../../Context/AuthContext';
import { useHistory} from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const userNameRef = useRef(null);
    // eslint-disable-next-line
    const [auth, setAuth] = useContext(AuthContext);
    const [error, setError] = useState(null);
    const handleLogin = () => {
        const result = login(userNameRef.current.value);
        setAuth(result.authToken);
        if (!result.response.success) {
            setError({ message: result.response.message });
        } else {
            history.replace({ pathname: "/" });
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