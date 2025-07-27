import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import MyMenu from './MyMenu';
import Home from './Home';
import DemoUsingDom from './DemoUsingDom';
import DemoUncontrolledComponent from './DemoUncontrolledComponent';
import DemoControlledComponent from './DemoControlledComponent';

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
            { path: '/',                      element: <Home /> },
            { path: '/usingDom',              element: <DemoUsingDom /> },
            { path: '/uncontrolledComponent', element: <DemoUncontrolledComponent /> },
            { path: '/controlledComponent',   element: <DemoControlledComponent /> },
        ]
    }
])

export default function App() {
    return <RouterProvider router={router} />    
}