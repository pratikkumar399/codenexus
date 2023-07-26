import React from 'react';
import { auth, provider } from './Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import hero from './assets/hero.png';


const AuthPage = ({ handleSignIn }) => {
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                handleSignIn(user); // Call the handleSignIn function passed as a prop
                navigate('/practicelogin');
                // history.push('/practicelogin');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="dark:bg-violet-100">
            <div className='flex px-4 py-16  md:px-10 lg:px-32 ' >
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-gray-900">
                            Deep Insights on the Inner Workings of Key Web Elements
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">
                            Discover, Explore, and Master: Your Journey through a Multifaceted Practice Website
                        </p>
                        <div className="absolute rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <button
                                onClick={handleGoogleSignIn}
                                className="font-semibold text-gray-600"
                            >
                                Sign In with Google <span aria-hidden="true">&rarr;</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src={hero}
                            alt="Hero"
                        />
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default AuthPage;