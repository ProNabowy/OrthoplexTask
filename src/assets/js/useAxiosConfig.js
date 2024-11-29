import axios from "axios";
import { getCookie, } from "./utils.jsx";
import { baseUrl } from "./constants.js";
import Swal from "sweetalert2";


/**
 * Configures axios with default headers and interceptors.
 * Sets loading state to true when a request starts and to false when a response is received or an error occurs.
 *
 * @param {function} setIsLoading - Function to set loading state.
 * @returns {object} Empty object.
 */
const useAxiosConfig = (setIsLoading) => {
    // Get the auth token from the cookie
    const AUTH_TOKEN = getCookie('token');

    // Set the base URL for axios requests
    axios.defaults.baseURL = baseUrl;

    // Set the authorization header with the auth token
    axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

    // Set the accept-language header to english
    axios.defaults.headers.common['Accept-Language'] = 'en';

    axios.defaults.headers.common['Content-Type'] = 'application/json';

    // Set the accept header to application/json
    axios.defaults.headers.common['Accept'] = 'application/json';

    // Add a request interceptor
    axios.interceptors.request.use(
        // Set loading to true when the request starts
        (config) => {
            setIsLoading(true);
            return config;
        },
        // Handle request errors here
        (error) => {
            setIsLoading(false);
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        // Set loading to false when the response is received
        (response) => {
            setIsLoading(false);
            return response;
        },
        // Handle response errors here
        (error) => {
            if (error.response) {

                if (error.response.status === 404) {
                    return;
                }
                // Handle error with swal
                Promise.reject(error).catch(
                    error => {
                        const errorsKeys = error?.data?.message || error?.response?.data?.error || error?.response?.data?.message || error?.response?.data?.errors

                        return Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: errorsKeys || `Something went wrong. Please try again later.`,
                        });
                    }
                )
            }

            // Set loading to false when an error occurs
            setIsLoading(false);
            return Promise.reject(error);
        }
    );

    // Return an empty object
    return {};
};


export {
    useAxiosConfig
}