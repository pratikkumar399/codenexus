import React, { useState } from 'react';
import AuthPage from '../Auth';
import Practice from './Practice';

const PracticePage = () => {
    const [user, setUser] = useState(null);

    const handleSignIn = (signedInUser) => {
        setUser(signedInUser);
    };

    return (
        <div>
            {user ? (
                <Practice />
            ) : (
                <AuthPage handleSignIn={handleSignIn} />
            )}
        </div>
    );
};

export default PracticePage;
