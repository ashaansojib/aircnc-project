import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import RoomProvider from './providers/RoomProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RoomProvider>
        <RouterProvider router={router} />
    </RoomProvider>
)
