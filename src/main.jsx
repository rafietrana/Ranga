import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import AddArtAndCraft from './Components/AddArtAndCraft/AddArtAndCraft.jsx';
import AllArtAndCraftItems from './Components/AllArtAndCraftItems/AllArtAndCraftItems.jsx';
import MyArtAndCraftList from './Components/MyArtAndCraftList/MyArtAndCraftList.jsx';
import UpdateArtAndCraft from './Components/UpdateArtAndCraft/UpdateArtAndCraft.jsx';
import DetailsArtAndCraft from './Components/DetailsArtAndCraft/DetailsArtAndCraft.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch("http://localhost:5000/artAndCraft")
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/registration",
        element: <Register/>,
      },
      {
        path: "/AddArtAndCraft",
        element: <AddArtAndCraft/>,
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtAndCraftItems/>,
        loader: () => fetch("http://localhost:5000/artAndCraft")
      },
      {
        path: "/myArtAndCraftList",
        element: <MyArtAndCraftList/>,
        loader: () => fetch("http://localhost:5000/artAndCraft")
      },
      {
        path: "/updateArtAndCraftSng/:id",
        element: <UpdateArtAndCraft/>,
        loader: ({params}) => fetch(`http://localhost:5000/artAndCraft/${params.id}`)
      },
      {
        path: "/DetailsArtAndCraft/:id",
        element: <DetailsArtAndCraft/>,
        loader: ({params}) => fetch(`http://localhost:5000/artAndCraft/${params.id}`)
      },
   
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
