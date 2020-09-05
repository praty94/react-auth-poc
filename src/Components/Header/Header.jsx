import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { logout } from '../../Authentication';
const Header = () => {
    const [auth, setAuth] = useContext(AuthContext);

    const handleClick = () => {
        if (auth) {
            const result = logout();
            setAuth(result);
        }
    }
    return (<div className="header">
        <h1 className="headerText">Welcome to Darwin</h1>
        {auth && auth.isAuth ?
            <div className="headerActions">
                <h2 style={{marginRight:20}}>Hi, {auth.role}</h2>
                <button onClick={() => handleClick()} className="button">LOG OUT</button>
            </div>
        : null}

    </div>);
}

export default Header;