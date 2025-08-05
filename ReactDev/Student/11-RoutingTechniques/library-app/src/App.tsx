import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import DataProvider from './DataProvider'

import MyMenu from './MyMenu';
import Home from './Home';

const books = DataProvider.getAllBooks()
const films = DataProvider.getAllFilms()

function AppLayout() {
    return (
        <>
            <MyMenu />         { /* Always display my common menu here (for example) */ }
            <Outlet />         { /* Display the current route component here */ } 
        </>
    )
}

const router = createBrowserRouter([
    { 
        element: <AppLayout />,

        children: [
              { path: '/', element: <Home/> },
        ]
    }
])

export default function App() {
    return <RouterProvider router={router} />    
}