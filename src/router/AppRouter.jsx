import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth";
import { childHeroesRoutes, HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


const routesConfig = createBrowserRouter([
    {
        path: "login",
        element: <PublicRoute><LoginPage /></PublicRoute>

    },


    {
        path: "/",
        element: <PrivateRoute><HeroesRoutes /></PrivateRoute>,
        children: childHeroesRoutes,
    }
]);


export const AppRouter = () => {

    return <RouterProvider router={routesConfig} />

}
