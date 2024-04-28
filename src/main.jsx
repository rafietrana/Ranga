import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import AddArtAndCraft from "./Components/AddArtAndCraft/AddArtAndCraft.jsx";
import AllArtAndCraftItems from "./Components/AllArtAndCraftItems/AllArtAndCraftItems.jsx";
import MyArtAndCraftList from "./Components/MyArtAndCraftList/MyArtAndCraftList.jsx";
import UpdateArtAndCraft from "./Components/UpdateArtAndCraft/UpdateArtAndCraft.jsx";
import DetailsArtAndCraft from "./Components/DetailsArtAndCraft/DetailsArtAndCraft.jsx";
import PrivateRoute from "./Components/Routers/PrivateRoute.jsx";
import CartoonDrawing from './Components/Category/CartoonDrawing';
import LandscapePainting from './Components/Category/LandscapePainting';
import CharcoalSketching from './Components/Category/CharcoalSketching';
import OilPainting from './Components/Category/OilPainting';
import PortraitDrawing from './Components/Category/PortraitDrawing';
import WatercolourPainting from './Components/Category/WatercolourPainting';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/Cartoon Drawing",
        element: <CartoonDrawing />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/Landscape Painting",
        element: <LandscapePainting />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/Charcoal Sketching",
        element: <CharcoalSketching />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/Oil Painting",
        element: <OilPainting />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/Portrait Drawing",
        element: <PortraitDrawing />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/Watercolour Painting",
        element: <WatercolourPainting />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/AddArtAndCraft",
        element: (
          <PrivateRoute>
            <AddArtAndCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtAndCraftItems />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/myArtAndCraftList",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/updateArtAndCraftSng/:id",
        element: (
          <PrivateRoute>
            <UpdateArtAndCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artAndCraft/${params.id}`),
      },
      {
        path: "/DetailsArtAndCraft/:id",
        element: (
          <PrivateRoute>
            <DetailsArtAndCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artAndCraft/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
