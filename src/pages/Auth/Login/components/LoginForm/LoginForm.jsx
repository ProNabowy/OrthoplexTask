import React from 'react'
import { useDataGetter } from './data';

/**
 * LoginForm component.
 * This component is used to render a login form.
 * It uses the useDataGetter hook to get the formik object.
 * The formik object contains the form values and the validation rules.
 * The component renders a form with the following fields: email and password.
 * The form has a submit button with the label "Sign in".
 * When the form is submitted, the formik.handleSubmit function is called.
 * @param {{}} props - The props passed to the component.
 * @returns {React.ReactElement} - The rendered component.
 */
export default function LoginForm({ }) {

    /**
     * The useDataGetter hook returns an object with the formik properties.
     * The formik properties are used to render the form.
     * The formik properties are: email, password, errors, and handleSubmit.
     */
    const { formik } = useDataGetter();

    /**
     * The rendered component.
     */
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>

                <label htmlFor="email" className={formik.errors.email && 'error'}>Email</label>

                <input
                    type="email"
                    autoFocus
                    name='email'
                    className={formik.errors.email && 'error'}
                    id='email'
                    onChange={formik.handleChange}
                    placeholder='Enter your email'
                />

                <p className='error'>{formik.errors.email && formik.errors.email}</p>

            </div>

            <div className='mt-3'>

                <label htmlFor="email" className={formik.errors.password && 'error'}>Password</label>

                <input
                    type="password"
                    name='password'
                    className={formik.errors.password && 'error'}
                    onChange={formik.handleChange}
                    id='password'
                    placeholder='Enter your Password'
                />

                <p className='error'>{formik.errors.password && formik.errors.password}</p>

            </div>

            <button type='submit' className='w-full mt-10'>Sign in</button>

        </form>
    )
}
