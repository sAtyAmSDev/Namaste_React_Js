import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Header from "./layout/Header.jsx";
import Chapter from "./Components/Chapter.jsx";

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
            },{
               path:"/chapter/:id",
               element:<Chapter/>
            }
         ], errorElement: <ErrorPage />
      }

   ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)