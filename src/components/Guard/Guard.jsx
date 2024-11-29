import { loggedIn } from '@/assets/js/utils';

/**
 * A simple authentication guard for React Router.
 *
 * @param {JSX.Element} children - The children to render if the user is logged in.
 * @returns {JSX.Element | null} The children if the user is logged in, null otherwise.
 */
export default function Guard({ children }) {

    /**
     * Check if the user is logged in.
     *
     * @type {boolean}
     */
    const isLogin = loggedIn();

    /**
     * Return the children if the user is logged in, null otherwise.
     *
     * @type {JSX.Element | null}
     */
    return isLogin ? children : null

};
