import React from "react";
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

const AppLayout = () => {
    /** Outlet just replaces the components Body, Contact Us, About Us, Cart according to the routing. Refer children given below */
    return <>
            <Header />
        <Outlet /> 
        </>
}

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