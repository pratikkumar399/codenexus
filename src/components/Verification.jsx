import React, { useState } from 'react';

const Verification = ({ onVerify }) => {
    const [accessCode, setAccessCode] = useState('');
    const [error, setError] = useState('');

    const handleVerify = (e) => {
        e.preventDefault();
        if (accessCode === '12345') {
            onVerify();
        } else {
            setError('Invalid access code. Please try again.');
        }
    };

    return (
        <form onSubmit={handleVerify}>
            <input
                type="text"
                placeholder="Access Code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
            />
            <button type="submit">Verify</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Verification;
