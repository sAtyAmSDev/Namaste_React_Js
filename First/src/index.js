import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Header from "./layout/Header.jsx";

const AppLayout = () => {

   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}

const appRouter = createBrowserRouter(
   [
      {
         path: "/",
         element: <AppLayout />,
         children: [
            {
               path: "/",
               element: <Home />,

            },
            {
               path: "/about",
               element: <About />,
            }, {
               path: "/contact",
               element: <Contact />,
            }
         ], errorElement: <ErrorPage />
      }

   ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)