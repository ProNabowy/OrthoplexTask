import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { setSecureCookie } from '@/assets/js/utils'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address').required('This field is required to proceed.'),
    password: Yup.string().required("A valid password is required. Please ensure you've entered your password correctly."),
});

const useDataGetter = () => {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        axios.post('auth/login', values).then(response => {

            // Append the token to the cookie
            setSecureCookie('token', response?.data?.access_token, 20);

            navigate('/profile');
        })
    }

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        validateOnChange: false,
        onSubmit: handleSubmit
    });

    return { formik };
}

export {
    useDataGetter
}