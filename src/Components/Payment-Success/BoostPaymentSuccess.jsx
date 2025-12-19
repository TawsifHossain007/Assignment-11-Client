import React, { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAuth/useAxiosSecure';
import { useSearchParams } from 'react-router';

const BoostPaymentSuccess = () => {

    const [searchParams] = useSearchParams()
    const axiosSecure = useAxiosSecure();
     const sessionId = searchParams.get('session_id');

        useEffect(()=>{
            if(sessionId){
                axiosSecure.patch(`/boost-payment-success?session_id=${sessionId}`)
            }
        },[sessionId,axiosSecure])

    return (
        <div>
            Boost Payment Successful. Thank you for your purchase!
        </div>
    );
};

export default BoostPaymentSuccess;