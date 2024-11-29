const useDataGetter = () => {

    const users = [
        { name: 'All Users', url: "/users", icon: "fa-duotone fa-solid fa-users" },
        { name: 'Call Center', url: "/call-center", icon: "fa-solid fa-user-bounty-hunter" },
        { name: 'Marketing', url: "/marketing", icon: "fa-solid fa-user-tie" },
        { name: 'Developers', url: "/developers", icon: "fa-solid fa-user-ninja" },
    ];

    const routes = [
        { name: 'Profile', url: "/profile", icon: "fa-thin fa-address-card" },
        { group: users, title: 'Users', icon: 'fa-solid fa-users' },
        { name: 'Real estate', url: "/real-estate", icon: "fa-solid fa-house-person-return" },
    ];

    // Return an object containing all the routes
    return {
        routes
    }
}


export {
    useDataGetter
}