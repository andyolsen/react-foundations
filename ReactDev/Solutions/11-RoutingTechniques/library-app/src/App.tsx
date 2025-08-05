import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import DataProvider from './DataProvider'

import MyMenu from './MyMenu';
import Home from './Home';
import Books from './Books';
import Films from './Films';
import MoreStuff from './MoreStuff';
import PageNotFound from './PageNotFound';

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
            { path: '/',          element: <Home/> },
            { path: '/books',     element: <Books books={books} format="TABLE"/> },
            { path: '/films',     element: <Films films={films} format="TABLE"/> },
            { path: '/moreStuff', element: <MoreStuff books={books} films={films} /> },
            { path: '*',          element: <PageNotFound /> },
        ]
    }
])

export default function App() {
    return <RouterProvider router={router} />    
}