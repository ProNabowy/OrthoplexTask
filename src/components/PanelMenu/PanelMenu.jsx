import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PanelMenu component renders a collapsible menu with a header and list of items.
 *
 * @param {Object} props - The component props.
 * @param {string} props.header - The header text.
 * @param {Array} props.items - The list of items.
 * @param {string} [props.icon='fa-regular fa-house'] - The icon class for the header.
 * @param {boolean} [props.defaultVisible=false] - The initial visibility state.
 * @param {string} props.title - The title of the menu group.
 * @returns {JSX.Element} The rendered PanelMenu component.
 */
export default function PanelMenu(props) {
    // Destructure the props
    const {
        header,
        items,
        icon = 'fa-regular fa-house',
        defaultVisible,
        isExpanded
    } = props;

    // State variables
    const [maxHeight, setMaxHeight] = useState(0);
    const [visible, setVisible] = useState(defaultVisible || false);
    const contentRef = useRef(null);

    // Effect hook to calculate the max height of the content
    useEffect(() => {
        /**
         * Calculate the total height of the content.
         */
        const calculateHeight = () => {
            if (contentRef.current) {
                const totalHeight = Array.from(contentRef.current.children)
                    .reduce((acc, child) => acc + child.scrollHeight, 0);
                setMaxHeight(totalHeight);
            }
        };

        // Use setTimeout to ensure the DOM is fully updated before calculating height
        if (visible) {
            setTimeout(calculateHeight, 0);
        } else {
            setMaxHeight(0);
        }
    }, [items, visible]);

    // Styles for the menu items
    const styles = `${isExpanded ? "ps-6" : "flex-center"} px-3 py-2 rounded-[8px] transition block text-white`;

    useEffect(() => {

        if (!isExpanded) setVisible(true);

    }, [isExpanded]);

    return (
        <ul className={`${visible ? "relative" : ""} text-white mb-2`}>

            {/* Render the header */}

            <div onClick={() => setVisible(prev => !prev)} className={`${isExpanded ? "" : "hidden"} ${visible ? "bg-[#94979E29]" : ""} min-h-[40px] rounded-[12px] py-2 px-3 flex items-center justify-between cursor-pointer`}>

                <div className={`flex items-center gap-3`}>
                    {/* Render the icon */}

                    <i className={`${icon} text-[17px]`}></i>
                    {/* Render the header text */}

                    <span className="text-[14px] font-[600]">{header}</span>

                </div>
                {/* Render the arrow icon */}

                <i className={`fa-solid fa-angle-down transition ${visible ? "rotate-[180deg]" : ""}`}></i>

            </div>
            {/* Render the content */}

            <div ref={contentRef} className={`transition ${visible ? "my-2" : ""} overflow-hidden`} style={{ maxHeight: `${visible ? `${maxHeight}px` : "0px"}` }}>
                {/* Render the list of items */}
                {items?.map((item, index) => <NavLink key={index} to={item.url?.toLowerCase() ?? ''} className={`${styles}`}>{isExpanded ? <span className="line-clamp-1">{item.name}</span> : <i className={`${item?.icon} text-[17px]`}></i>}</NavLink>)}
            </div>

        </ul>
    );
}
