import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import MyMenu from './MyMenu';
import MyFooter from './MyFooter';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

function AppLayout() {
    return (
        <>
            <MyMenu />         { /* Always display my common menu here (for example) */ }
            <Outlet />         { /* Display the current route component here */ } 
            <MyFooter />       { /* Always display my footer here (for example) */ }
        </>
    )
}

const router = createBrowserRouter([
    { 
        element: <AppLayout />,

        children: [
            { path: '/',        element: <Home /> },
            { path: '/about',   element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '*',        element: <PageNotFound /> },
        ]
    }
])

export default function App() {
    return <RouterProvider router={router} />    
}