import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAuth/useAxiosSecure';

const PaymentSuccess = () => {
     const [searchParams] = useSearchParams()
     const sessionId = searchParams.get('session_id');
     const axiosSecure = useAxiosSecure()

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        }
    },[sessionId,axiosSecure])

    return (
        <div>
            Payment Successful. Thank you for your purchase!
        </div>
    );
};

export default PaymentSuccess;