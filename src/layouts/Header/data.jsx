import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setSecureCookie } from '@/assets/js/utils';

/**
 * Custom hook for managing data-related operations.
 *
 * @returns {Object} An object containing data management functions.
 */
const useDataGetter = () => {

    const navigate = useNavigate();

    /**
     * Handles user logout by clearing local storage, removing the authentication token,
     * and navigating to the login page.
     */
    const handleLogout = () => {
        // Clear all data from local storage
        window.localStorage.clear();

        // Remove the secure cookie for the authentication token
        setSecureCookie('token', null, -1);

        // Navigate to the login page
        navigate('/login');


        // ### there is no logout api but i just simulating it
        // Send a request to delete the logout session and navigate to the login page once completed
        axios.delete('logout').finally(() => navigate('/login'));
    };

    // Return an object with the handleLogout function
    return { handleLogout };
};

export {
    useDataGetter
}