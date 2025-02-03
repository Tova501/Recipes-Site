import { createBrowserRouter } from "react-router"
import AppLayout from "./AppLayout"
import Home from "./Home"
import Recipes from "./recipes/Recipes"
import UserUpdate from "./user/UserUpdate"
import AddRecipe from "./recipes/AddRecipe"

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        errorElement: <h1>error page!!</h1>,
        children: [
            { path: '/', element: <Home/>},
            {path: '/recipes', element: <Recipes/>},
            {path: '/recipes/add', element: <AddRecipe/> },
            {path: '/user/update', element: <UserUpdate/>}
        ]
    }
])

