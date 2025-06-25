import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../pages/LoadingPage';

const ProtectedRoute = ({children}) => {
    const {userData,loading} = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    if(userData && userData?.email){
        return children;
    }





    return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default ProtectedRoute;