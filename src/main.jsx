import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextGlobalProvider from './context/GlobalContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Views/ErrorPage.jsx'
  import ProductDetail from './ProductDetail/index.jsx'
 import Layout from './components/layout/index.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import CartPage from './Views/CartPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cart',
    element: 
      <CartPage />
    
  },
  {
    path: 'product/:id',
    element: <ProductDetail/>
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextGlobalProvider>
    <StoreContextProvider>
      <Layout />
      <RouterProvider router={router} />
   
    </StoreContextProvider>
    </ContextGlobalProvider>
  </React.StrictMode>
)
