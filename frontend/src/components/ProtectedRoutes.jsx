import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const {isAuth, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        // Optionally, you can return a loading spinner here
        return null;
    }

    if(!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoutes