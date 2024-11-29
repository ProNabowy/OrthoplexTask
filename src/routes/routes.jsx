import { lazy } from "react";
import { useRoutes } from "react-router-dom";

/**
 * Loads a component lazily and returns it wrapped in a React Lazy component.
 * This is necessary for server-side rendering to prevent components from being
 * rendered before they are actually used.
 *
 * @param {Function} importFunc - A function that imports the component that
 * should be loaded lazily.
 *
 * @returns {ReactComponent} - The lazily loaded component.
 */
const loadComponent = (importFunc) => {
  const Component = lazy(importFunc);
  return <Component />;
};

const routesData =
  [
    { path: "/login", element: loadComponent(() => import("../pages/Auth/Login")) },
    { path: "/profile", element: loadComponent(() => import("../pages/Profile")) },
    { path: "*", element: loadComponent(() => import("../components/NotFound")) },
  ];


/**
 * Handles the routing of the application.
 *
 * @returns {Object} An object containing the routes configuration.
 */
export default function useHandleRoutes() {
  /**
   * The routes configuration.
   *
   * @type {Array} An array of route objects.
   */
  const routesData =
    [
      { path: "/login", element: loadComponent(() => import("../pages/Auth/Login")) },
      { path: "/profile", element: loadComponent(() => import("../pages/Profile")) },
      { path: "*", element: loadComponent(() => import("../components/NotFound")) },
    ];

  /**
   * Returns the routes configuration.
   *
   * @returns {Object} An object containing the routes configuration.
   */
  let routes = useRoutes(routesData);

  return { routes };
}
