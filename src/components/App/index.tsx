import React from 'react'
import GlobalStyles from '../GobalStyles'
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from '../AppRouter'

export default function App() {
  return (
    <BrowserRouter>
      <h1>Hypetrain</h1>
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  )
}
