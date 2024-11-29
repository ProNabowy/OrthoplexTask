import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { loggedIn } from '@/assets/js/utils';

/**
 * This component is a middleware that checks if the user is logged in or not.
 * It will redirect the user to the login page if they are not logged in.
 * If the user is logged in, it will redirect them to the home page if they are trying to access the login page.
 * @returns {JSX.Element} - Nothing is rendered as this is a middleware component.
 */
export default function Middleware() {

    /**
     * The list of routes that are protected by the middleware.
     * If the user is not logged in, they will be redirected to the login page.
     */
    const [routes] = useState(['/login']);

    /**
     * The current location of the user.
     */
    const location = useLocation().pathname;

    /**
     * The navigate function from react-router-dom.
     */
    const navigate = useNavigate();

    /**
     * Checks if the user is logged in or not.
     */
    const isLogin = loggedIn();

    /**
     * The useEffect hook that will run when the component is mounted.
     * It will check if the user is logged in or not, and redirect them accordingly.
     */
    useEffect(() => {

        // If the user is not logged in and is trying to access a protected route, redirect them to the login page.
        if (routes.includes(location) && isLogin) {

            navigate('/profile');

        } else if (!isLogin) {

            navigate('/login');

        }

    }, [location, isLogin]);

    // This middleware component does not render anything.
    return null;

}
