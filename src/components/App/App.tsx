import React from 'react'
import {GlobalStyles} from '../GobalStyles'
import {UserProvider} from '../UserProvider'
import {AppRouter as Router} from '../AppRouter'
import {Footer} from '../Footer'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
        <Footer />
        <GlobalStyles />
      </UserProvider>
    </BrowserRouter>
  )
}

export {App}
