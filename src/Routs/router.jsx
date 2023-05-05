import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";
import LoadingEffect from "../LoadingEffect/LoadingEffect";
import ChefRecipes from "../Pages/Home/chefRecipes/chefRecipes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },

            {
                path: "/recipes/:id",
                loader: ({ params }) => fetch(`https://flavor-fusion-server-side.vercel.app/cafe/${params.id}`),
                element: <PrivateRoute>
                    <ChefRecipes></ChefRecipes>
                </PrivateRoute>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,

            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            }
        ]
    }
])