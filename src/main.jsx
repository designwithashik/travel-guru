import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
