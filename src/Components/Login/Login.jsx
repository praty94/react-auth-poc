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
            <input type="password" placeholder="Password" className="textBox" style={{marginTop:10}}></input>            
            <button onClick={() => handleLogin()} className="button loginButton">Login</button>

            <div className="noteBox">
                <h4>For logging in use the following details </h4>
                <h4>user access : user@test.com</h4>
                <h4>admin access : admin@test.com</h4>
                <h4>password is not required</h4>
            </div>
        </div>
    );
}
export default Login;