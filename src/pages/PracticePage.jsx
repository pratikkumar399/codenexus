import React, { useState } from 'react';
import Form from '../components/Form';
import Verification from '../components/Verification';
import Practice from './Practice';

const PracticePage = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleFormSubmit = (data) => {
        setUserData(data);
    };

    const handleVerification = () => {
        setIsVerified(true);
    };

    return (
        <div>
            {!isVerified && <Form onSubmit={handleFormSubmit} />}
            {userData && !isVerified && <Verification onVerify={handleVerification} />}
            {isVerified && <Practice />}
        </div>
    );
};

export default PracticePage;
