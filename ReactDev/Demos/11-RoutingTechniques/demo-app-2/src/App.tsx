import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import MyMenu from './MyMenu';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Products from './Products';
import Product from './ProductV1';
import ProductsWithNestedRoutes from './ProductsWithNestedRoutes';
import ProductUnselected from './ProductUnselected';
import ProductSummary from './ProductSummary';
import TsAndCs, { TsAndCsForRegion, getDataForRegion } from './TsAndCs';

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
            { path: '/', element: <Home /> },
            { path: '*', element: <PageNotFound /> },

            /* Demonstrate how to define parameterized routes */
            { path: '/products',    element: <Products /> },
            { path: '/product/:id', element: <Product /> },

            /* Demonstrate how to define nested routes */
            { 
                path: '/products-with-nested-routes', element: <ProductsWithNestedRoutes />,
                children: [
                    { index: true,     element: <ProductUnselected /> }, 
                    { path: ':id',     element: <Product /> }, 
                    { path: 'summary', element: <ProductSummary /> }
                ]
            },

            /* Demonstrate how to load data for a route */ 
            { path: '/ts-and-cs',     element: <TsAndCs /> },
            { path: '/ts-and-cs/:id', element: <TsAndCsForRegion />, loader: getDataForRegion }
        ]
    }
])


export default function App() {
    return <RouterProvider router={router} />    
}