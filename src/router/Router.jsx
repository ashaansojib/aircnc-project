import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AddRoom from "../pages/addRoom/AddRoom";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children:[
            {
                path: '/',
                element:<Home />
            },
            {
                path: '/add-room',
                element: <AddRoom />
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);
export default router;