import React, { useState } from 'react';
import AuthPage from '../Auth';


const PracticePage = () => {
    const [user, setUser] = useState(null);

    const handleSignIn = (signedInUser) => {
        setUser(signedInUser);
    };

    return (
        <div>

            <AuthPage handleSignIn={handleSignIn} />

        </div>
    );
};

export default PracticePage;
