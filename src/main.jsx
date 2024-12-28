import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './Config/stripeConfig'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/Theme/standard'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
    </Elements>
    <GlobalStyles/>
    <ToastContainer autoClose = {3000} theme='colored'/>
    </AppProvider>
    </ThemeProvider>
  </StrictMode>
)