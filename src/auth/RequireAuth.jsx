import React, {useContext} from 'react';
import {AuthContext} from "./AuthContext";
import {Navigate, useLocation} from 'react-router-dom'
import Loader from "../components/UI/Loader/Loader";

const RequireAuth = ({children}) => {

    const location = useLocation()
    const {isAuth, isLoadingIsAuth} = useContext(AuthContext)

    if(isLoadingIsAuth) return <Loader/>

    if(!isAuth) return <Navigate to={'/login'} state={location}/>;

    return children;
};

export default RequireAuth;