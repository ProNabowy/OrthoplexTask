import React, { createContext, useEffect, useState } from 'react';
import { loggedIn } from '@/assets/js/utils';
import axios from 'axios';

const AppContext = createContext();

/**
 * The AppProvider component is the context provider for the AppContext.
 * It renders the children components and provides the context values to them.
 * The context values are the isLoading state, the user object, the isExpanded state,
 * the setIsLoading function, the setUser function, and the setIsExpanded function.
 * The setUser function is used to update the user object in the context.
 * The setIsLoading function is used to update the isLoading state in the context.
 * The setIsExpanded function is used to update the isExpanded state in the context.
 * The useEffect hook is used to fetch the user profile data from the server when the component mounts.
 * The user profile data is stored in the user object in the context.
 * @param {{ children: React.ReactNode }} props - The children components to be rendered.
 * @returns {React.ReactElement} - The context provider component.
 */
const AppProvider = ({ children }) => {

    /**
     * The isLoading state is used to track whether the app is in a loading state or not.
     * The isLoading state is set to true when the app is in a loading state and set to false otherwise.
     */
    const [isLoading, setIsLoading] = useState(false);

    /**
     * The isExpanded state is used to track whether the sidebar is expanded or not.
     * The isExpanded state is set to true when the sidebar is expanded and set to false otherwise.
     */
    const [isExpanded, setIsExpanded] = useState(true);

    /**
     * The user object is used to store the user profile data fetched from the server.
     * The user object is updated by the setUser function.
     */
    const [user, setUser] = useState({});

    /**
     * The isLogin variable is used to check if the user is logged in or not.
     * The isLogin variable is set to true if the user is logged in and set to false otherwise.
     */
    const isLogin = loggedIn();

    /**
     * The useEffect hook is used to fetch the user profile data from the server when the component mounts. 
     */
    useEffect(() => {

        if (isLogin) axios.get('auth/profile').then(response => setUser(response.data));

        return () => { };
    }, [isLogin]);


    /**
     * The exportedValue object is used to store the context values to be exported.
     * The exportedValue object contains the isLoading state, the user object, the isExpanded state,
     * the setIsLoading function, the setUser function, and the setIsExpanded function.
     */
    const exportedValue = {
        isLoading,
        setIsLoading,
        user,
        setUser,
        isExpanded,
        setIsExpanded
    }

    return (
        <AppContext.Provider value={exportedValue}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };

