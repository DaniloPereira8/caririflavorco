import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import {router} from './routes'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './Config/stripeConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
    <RouterProvider router={router}/>
    </Elements>
    <GlobalStyles/>
    <ToastContainer autoClose = {3000} theme='colored'/>
    </AppProvider>
  </StrictMode>,
)


//foi instalado yarn add @stripe/react-stripe-js @stripe/stripe-js
// Elements envolvendo a RouterProvider,
//para seguir para o pagamento,
//dentro do config foi criado uma pasta stripeConfig.js
//