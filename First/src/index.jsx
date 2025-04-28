import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Header from "./layout/Header.jsx";
import Chapter from "./Components/Chapter.jsx";
import "./index.css";
import Slok from "./pages/Slok.jsx";
import UserContext from "./Components/Utils/UserContext.jsx";
// import Books from "./pages/Books.jsx";
const Books = lazy(() => import("./pages/Books.jsx"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Satyam",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ logInUser: userName, setUserName }}>
      <>
        <Header />
        <Outlet />
      </>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
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
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/books",
        element: (
          <Suspense fallback="Loading.....">
            <Books />
          </Suspense>
        ),
      },
      {
        path: "/chapter/:id",
        element: <Chapter />,
      },
      { path: "/chapter/:chapterId/slok/:slokId", element: <Slok /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
