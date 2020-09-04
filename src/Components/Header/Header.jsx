import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {logout} from '../../Authentication';
const Header = () => {
    const [auth, setAuth] = useContext(AuthContext);

    const handleClick = () => {
        if(auth){
            const result = logout();
            setAuth(result);
        }
    }
    return (<div className="header">
        <h1 className="headerText">Welcome to Darwin</h1>
        <button onClick={() => handleClick()} className="button">{auth && auth.isAuth ? "LOG OUT" : "LOG IN"}</button>
    </div>);
}

export default Header;