import { Link } from 'react-router-dom'
import heroimg from '../assets/bill.png'
import { useNavigate } from "react-router-dom";

export default function Hero() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/practice`;
        navigate(path);
    }


    return (
        <>
            <section>
                <div style={{ backgroundColor: "#" }} className="bg-violet-100" >
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">
                            Practice the flow of components
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
                            Welcome to the  <span style={{ color: 'orange', fontWeight: 'bold' }}   >Code</span><span style={{ color: 'blue', fontWeight: 'bold' }}  >Nexus</span>   ! Discover the power of automation and elevate your productivity. Whether you're a seasoned developer, a business owner, or simply looking to streamline your daily tasks, our automation solutions have you covered.
                        </p>
                        <div className="flex flex-wrap justify-center">
                            <button
                                onClick={routeChange}
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
                            >

                                Get Started
                            </button>
                            {/* <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
                            >
                                Learn more
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </>

    )
}
