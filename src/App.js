import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantInfo from "./components/RestaurantInfo";
import LoginForm from "./LoginForm";
import UserContext from "../config/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//import Grocery from "./components/Grocery"; lazy imported. so this is not required

const AppLayout = () => {
    const [defaultUsername, setDefaultUsername] = useState("User");
    const value = { defaultUsername, setDefaultUsername }; // created object
    /** Outlet just replaces the components Body, Contact Us, About Us, Cart according to the routing. Refer children given below */
    return <>
                <Provider store={appStore}>
                        <UserContext.Provider value= {value}> 
                            <Header />
                            <Outlet /> 
                        </UserContext.Provider>
                </Provider>
            </>
}

//Lazy loading
const Grocery = lazy(()=> import("./components/Grocery")) //lazy and import are react fns

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurant/:id',  // dynamic res id
                element: <RestaurantInfo />
            },
            {
                path: '/login',
                element: <LoginForm />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={router} />); // To route to different pages