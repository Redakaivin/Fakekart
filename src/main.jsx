import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Product from './Pages/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails.jsx'
import Login from './Pages/Login.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import CartProvider from './context/CartContext.jsx'
import Cart from './Pages/Cart.jsx'
import Register from './Pages/Register.jsx'
import UserProvider from './context/UserContext.jsx'



let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'product',
        element: <Product />
      },

      {
        path: 'detail/:id',
        element: <ProductDetails />
      },

      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <UserProvider>

    <CartProvider>

      <ThemeProvider>

        <RouterProvider router={router} />

      </ThemeProvider>

    </CartProvider>

  </UserProvider>
)
