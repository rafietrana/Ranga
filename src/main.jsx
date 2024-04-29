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
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
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
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
      },
      {
        path: "/Landscape Painting",
        element: <LandscapePainting />,
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
      },
      {
        path: "/Charcoal Sketching",
        element: <CharcoalSketching />,
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
      },
      {
        path: "/Oil Painting",
        element: <OilPainting />,
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
      },
      {
        path: "/Portrait Drawing",
        element: <PortraitDrawing />,
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
      },
      {
        path: "/Watercolour Painting",
        element: <WatercolourPainting />,
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
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
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
      },
      {
        path: "/myArtAndCraftList",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList />
          </PrivateRoute>
        ),
        loader: () => fetch("https://server-site-wheat-three.vercel.app/artAndCraft"),
      },
      {
        path: "/updateArtAndCraftSng/:id",
        element: (
          <PrivateRoute>
            <UpdateArtAndCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-site-wheat-three.vercel.app/artAndCraft/${params.id}`),
      },
      {
        path: "/DetailsArtAndCraft/:id",
        element: (
          <PrivateRoute>
            <DetailsArtAndCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-site-wheat-three.vercel.app/artAndCraft/${params.id}`),
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
