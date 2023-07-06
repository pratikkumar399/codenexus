
function Form() {
    const [code, setCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
                // User successfully logged in
                console.log(result.user);
                // Show the original contents of the practice page
            })
            .catch((error) => {
                // An error occurred during login
                setErrorMessage(error.message);
            });
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
        setErrorMessage('');
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        if (code === 'your-verification-code') {
            handleLogin();
        } else {
            setErrorMessage('Wrong verification code');
        }
    };

    return (
        <div>
            <form onSubmit={handleCodeSubmit}>
                <input
                    type="text"
                    value={code}
                    onChange={handleCodeChange}
                    placeholder="Enter verification code"
                />
                <button type="submit">Login with Google</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default Form;