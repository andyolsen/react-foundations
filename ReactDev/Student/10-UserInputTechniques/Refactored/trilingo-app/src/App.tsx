import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import French from './French'
import German from './German'
import Italian from './Italian'
import PageNotFound from './PageNotFound';

const router = createBrowserRouter([
  { path: '/',        element: <Home/> },
  { path: '/french',  element: <French/> },
  { path: '/german',  element: <German/> },
  { path: '/italian', element: <Italian/> },
  { path: '*',        element: <PageNotFound /> },
])

export default function App() {
  return <RouterProvider router={router} />    
}