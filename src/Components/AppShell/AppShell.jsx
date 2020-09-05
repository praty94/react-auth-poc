import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginView, AdminView, UserView, ErrorView } from '../';

const AppShell = () => {
    const [auth] = useContext(AuthContext);
    return (<Router>
        <div className="appShell">
            <Switch>
                <Route path="/login">
                    <LoginView />
                </Route>
                {/*User Route*/}
                <Route path="/user">
                    {auth && auth.isAuth ? <UserView /> : <Redirect to={{ pathname: "/login" }}></Redirect>}
                </Route>
                {/*Admin route*/}
                <Route path="/admin">
                    {auth && auth.isAuth ?
                        (auth.role === "admin" ? <AdminView /> :
                            <ErrorView errorCode={403} errorMessage="User is not authorized to view this page"></ErrorView>) :
                        <Redirect to={{ pathname: "/login" }}></Redirect>
                    }

                </Route>
                {/* Default routing*/}
                <Route path="/">
                    {auth && auth.isAuth ?
                        (auth.role === "admin" ? <Redirect to={{ pathname: "/admin" }}></Redirect> :
                            <Redirect to={{ pathname: "/user" }}></Redirect>) :
                        <Redirect to={{ pathname: "/login" }}></Redirect>
                    }
                </Route>
            </Switch>
        </div>
    </Router>);
}

export default AppShell;