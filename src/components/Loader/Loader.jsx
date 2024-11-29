import './index.css';

/**
 * Loader component to indicate loading state.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isWindowLoad - Determines visibility of the loader.
 * @returns {JSX.Element} The Loader component.
 */
export default function Loader({ isWindowLoad }) {
    return (
        <div
            // The container div for the loader
            className={`loader-page h-[100vh] fixed left-0 top-0 z-[2000] w-full flex-center ${!isWindowLoad ? "opacity-0 !z-[-1]" : "opacity-100"}`}
            // Inline styles for transition and background
            style={{ transition: '0.4s all ease-in-out', background: 'rgba(0, 0, 0, 0.80)' }}
        >
            <div className="loading-page-wrapper">
                {/* The animated loading page */}
                <div className="loading-page"></div>
            </div>
        </div>
    );
}
