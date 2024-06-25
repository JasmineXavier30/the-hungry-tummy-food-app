import React, { useContext } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useNavigate } from "react-router-dom";
import UserContext from "../config/UserContext";

const LoginForm = () => {
    let { defaultUsername, setDefaultUsername } = useContext(UserContext);
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
            console.log(val);
            setDefaultUsername(val.username); // setting username to context
            setSubmitting(false);
            navigate("/", { state: { ...val } }); //spread form values into an object and send
        }, 1000)
    }

    return (
        <div className="text-center border border-lime-500 rounded my-20 mx-64 p-10 bg-lime-50">
            <h1 className="text-xl font-bold pb-10">Login</h1>
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
                                <Field type="text" id="username" name="username" className="border m-3 p-2 rounded border-lime-500 w-[30rem]" />
                                <ErrorMessage name="username" component="div" style={redError} />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="password" name="password" className="border m-3 p-2 rounded border-lime-500 w-[30rem]" />
                                <ErrorMessage name="password" component="div" style={redError} />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="bg-transparent rounded border border-lime-500 hover:bg-lime-300 hover:text-white px-6 py-2 m-4">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default LoginForm;