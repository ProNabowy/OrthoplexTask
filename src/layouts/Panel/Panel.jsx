import { NavLink, useLocation } from 'react-router-dom';
import { useDataGetter } from './data';
import { PanelMenu } from '@/components';
import { Fragment } from 'react';

/**
 * Render a group of items with a title and a divider
 * @param {Array} items - The items to render
 * @param {string} title - The title of the group (optional)
 * @returns {JSX.Element} - The rendered group
 */
const renderGroup = (item, isExpanded) => {
    // Render a group of items with a title and a divider
    return (
        <li>
            {/* Render a link to the item */}
            <NavLink
                to={item?.url}
                className='flex items-center transition gap-3 rounded-[8px] text-white font-medium mb-2 py-2 px-3'
            >
                {/* Render an icon for the item */}
                <i className={`${item.icon} text-[17px]`}></i>
                {/* Render the name of the item */}
                <span className={`text-[var(--text)] transition ${isExpanded ? "" : "hidden"}`}>
                    {item?.name}
                </span>
            </NavLink>
        </li>
    );
};


/**
 * The panel component of the admin dashboard
 * @param {Object} props - The props passed to the component
 * @param {boolean} props.isExpanded - Indicates if the panel is expanded
 * @param {Function} props.setIsExpanded - A function to set the expanded state of the panel
 * @returns {JSX.Element} The panel component
 */
export default function Panel({ isExpanded, setIsExpanded }) {

    const { routes } = useDataGetter(setIsExpanded);

    const locationPath = useLocation().pathname;

    const isRouteActive = (route) => {
        // Filter direct URLs to check if the route matches the current location
        const directMatch = route?.filter(item => item.url?.toLowerCase() === locationPath);

        // Return true if either direct or indirect match is found
        return directMatch.length
    }

    return (
        <aside
            className={`fixed transition bg-[#03060d] ${isExpanded ? "w-[288px]" : "w-[76px]"} border-r border-r-[#1B1E25] transition z-[200] min-h-[100vh] max-h-[100vh] overflow-auto `}
            onClick={e => e.stopPropagation()}
        >

            <i onClick={_ => setIsExpanded(false)} className={`fa-solid fa-xmark text-white text-lg absolute top-5 right-5 cursor-pointer lg:hidden ${isExpanded ? "" : "hidden"}`}></i>

            {/* Display the logo */}
            <img src={'/images/logo.png'} className='size-[60px] m-auto my-3' alt="" />

            <div className='pb-6 px-4'>
                {
                    routes?.map((route, index) => {
                        return (
                            route?.group
                                ?
                                <PanelMenu
                                    key={index}
                                    items={route?.group}
                                    isExpanded={isExpanded}
                                    icon={route?.icon}
                                    defaultVisible={isRouteActive(route?.group)}
                                    header={route?.title}
                                />
                                :
                                <Fragment key={index}>{renderGroup(route, isExpanded)}</Fragment>
                        )
                    })
                }
            </div>

        </aside>
    )
}

/**
 * Render a group of links within a panel
 * @param {Array} items - The array of items to render
 * @param {string} title - The title of the group (optional)
 * @returns {JSX.Element} The group of links
 */

