import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AddRoom from "../pages/addRoom/AddRoom";

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
    }
]);
export default router;