import React from 'react';
import useAuth from '../hooks/useAuth/useAuth';
import useRole from '../hooks/useRole/useRole';
import Loading from '../Components/Loading/Loading';
import Forbidden from '../Components/Forbidden/Forbidden';

const UserRoutes = ({children}) => {
    const {loading} = useAuth()
    const {role, roleLoading} = useRole()

    if(loading || roleLoading){
        return <Loading></Loading>
    }

    if(role !== 'user'){
        return <Forbidden></Forbidden>
    }

    return children
};

export default UserRoutes;