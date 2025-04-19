import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Header from "./layout/Header.jsx";


// const Parent = React.createElement('h1', { id: "header", className: "header" },
//      [React.createElement('div', 
//         { id: "Child1", className: "Child1" },
//         [React.createElement('h1', 
//             { id: "h1", className: "h1" },
//              "hello world with SSSSSSssssSReact Js!"),React.createElement('h2', 
//                 { id: "h2", className: "h2" },
//                  "hello world with React Js!")]), 
//                  React.createElement('div', 
//                     { id: "Child2", className: "Child2" },
//                     [React.createElement('h1', 
//                         { id: "h1", className: "h1" },
//                          "hello world with React Js!"),React.createElement('h2', 
//                             { id: "h2", className: "h2" },
//                              "hello world with React Js!")])
//             ],)

// const JsxParent = (<>
//    <h1>Hi iam from jsx code</h1>
//    <h1>Hi iam from jsx code</h1>
//    <h1>Hi iam from jsx code</h1>
//    <h1>Hi iam from jsx code</h1>
// </>
// )
// console.log(JsxParent);


// react Component


// to insert the 1 component in 2 component that is *Component Composition*
const AppLayout = () => {
   const [FetchData, setFetchData] = useState([])
   useEffect(() => {

   })

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