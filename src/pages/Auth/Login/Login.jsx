import { LoginForm } from './components';

/**
 * The Login component renders the login page.
 *
 * The component contains a login form with inputs for the email and password.
 * The component also contains a background image and a logo.
 *
 * @returns {React.ReactElement} The Login component.
 */
export default function Login() {

  return (
    <section className='grid grid-cols-1 lg:grid-cols-2'>

      <div className='flex-center min-h-[100vh]' style={{ background: 'linear-gradient(175deg,#303030 0%,#000 85%)' }}>

        <div className='w-[90%] sm:w-[600px]'>

          {/* The logo of the company */}
          <img src="/images/logo.webp" className='w-[250px]' alt="Orthoplex logo" />

          {/* The heading of the page */}
          <h1 className='my-3 text-white font-medium text-[30px]'>Sign in to your account</h1>

          {/* The subheading of the page */}
          <p className='font-medium text-gray text-sm mb-10'>Welcome Back to <b className='text-primary'>Orthoplex</b> Login with your credentials</p>

          {/* The login form */}
          <LoginForm />

        </div>

      </div>

      {/* The background image of the page */}
      <img src="/images/login-background.webp" className='hidden lg:inline w-full max-w-full max-h-full h-[100vh] object-cover' alt="Login background image" />

    </section>
  )
}

