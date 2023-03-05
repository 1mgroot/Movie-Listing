import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {path: "/movie/:movieID", element: <MovieDetail/>},
    {path: "/login", element:<Login/>}
]);