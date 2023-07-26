import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Practiceoption = ({ title, description, imageUrl, link }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
        img.src = imageUrl;
    }, [imageUrl]);

    return (
        <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-blue-900">
            <Link to={link}>
                {imageLoaded ? (
                    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
                ) : (
                    <div className="w-full h-40 bg-gray-200 rounded-t-lg" />
                )}
            </Link>

            {/* <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a> */}
            <div className="p-4">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{title}</h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">{description}</p>
                <Link
                    to={link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Click here to Practice
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Practiceoption;
