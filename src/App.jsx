import { Suspense, useContext, } from 'react'
import useHandleRoutes from './routes/routes';
import { Header, Panel } from './layouts';
import { AppContext } from './context/AppContext';
import { useAxiosConfig } from './assets/js/useAxiosConfig';
import { loggedIn } from './assets/js/utils';
import './assets/styles/App.css'
import { Middleware, Loader } from './components';
import Guard from './components/Guard/Guard';


/**
 * The main application component.
 * 
 * @returns {JSX.Element} The App component.
 */
function App() {

  // Get the routes from the custom hook
  const { routes } = useHandleRoutes();

  // Get the context values from AppContext
  const {
    isLoading,
    setIsLoading,
    isExpanded,
    setIsExpanded
  } = useContext(AppContext);

  // Configure axios with loading state
  useAxiosConfig(setIsLoading);

  // Check if the user is logged in
  const isLogin = loggedIn();

  return (
    <div className='flex'>

      {/* Middleware for authentication and routing */}
      <Middleware />

      {/* Loader component to indicate loading state */}
      <Loader isWindowLoad={isLoading} />

      {/* Suspense component for lazy loading */}
      <Suspense fallback={<Loader isWindowLoad={true} />}>

        {/* Guard component to protect routes */}
        <Guard>
          <Panel isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </Guard>

        <main className={`flex-1 transition min-h-[100vh] relative ${isLogin ? isExpanded ? "lg:max-w-[calc(100%_-_288px)] lg:ms-[288px]" : "max-w-[calc(100%_-_76px)] ms-[67px]" : null}`}>

          {/* Header component with toggle for panel expansion */}
          <Guard>
            <Header setIsExpanded={setIsExpanded} />
          </Guard>

          {/* Render the routes */}
          <div className={`${isLogin ? "p-2 sm:p-8" : ""}`}>{routes}</div>

        </main>

      </Suspense>

    </div>
  )
}

export default App;
