import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Principal from "./components/Principal";
import ErrorPage from "./components/ErrorPage";
import Counter from "./components/Counter";
import ListaTareas from "./components/ListaTareas";
import ApiGet from "./components/Consumo";
import "./App.css";
import ApiGetFetch from "./components/Consumo2";
import Contexto from "./context/Contexto";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
      errorElement: <ErrorPage />,
      children: [
        {          path: "contar/",
          element: <Counter />,
        },
        {
          path: "listado/",
          element: <ListaTareas />,
          errorElement: <ErrorPage />,
        },
        {
          path: "consumo/",
          element: <ApiGet />,
          errorElement: <ErrorPage />,
        },
      ],
      
    },

    {
      path: "contexto/",
      element: <Contexto/>,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
