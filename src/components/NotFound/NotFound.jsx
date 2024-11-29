import React from 'react'
import { useLocation } from 'react-router-dom'

/**
 * This component will be rendered when a route is not found.
 * It will display a message indicating that the route will be available soon.
 * The message will include the path of the route that was attempted.
 * @returns {React.ReactElement} A React element representing the not found page.
 */
export default function NotFound() {
    const location = useLocation();
    const pathname = location.pathname.slice(1);

    return (
        <p className='sm:text-[18px] w-[90%] sm:w-fit text-center text-white capitalize opacity-70 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
            This Route will be come as soon as possible ({pathname})
        </p>
    );
}
