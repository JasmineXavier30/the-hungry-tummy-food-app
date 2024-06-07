import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const redError = {
        color: "red"
    }
    //Initial form values
    const initialVal = {
        username: "",
        password: ""
    }

    //validation fn
    const validateFields = val => {
        const errors = {};
        if (!val.username) errors.username = "Username is required!";
        if (!val.password) errors.password = "Password is required!";
        return errors;
    }

    //form submission handling
    const handleSubmit = (val, { setSubmitting }) => {
        setTimeout(() => {
            console.log(val)
            setSubmitting(false);
            navigate("/", { state: { ...val } }); //spread form values into an object and send
        }, 1000)
    }

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={initialVal}
                onSubmit={handleSubmit}
                validate={validateFields}
            >
                {
                    ({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="username">Username</label>
                                <Field type="text" id="username" name="username" />
                                <ErrorMessage name="username" component="div" style={redError} />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="password" name="password" />
                                <ErrorMessage name="password" component="div" style={redError} />
                            </div>
                            <button type="submit" disabled={isSubmitting}>Login</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default LoginForm;