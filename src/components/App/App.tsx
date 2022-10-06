import React from 'react'
import {GlobalStyles} from '../GobalStyles'
import {UserProvider} from '../UserProvider'
import {AppRouter as Router} from '../AppRouter'
import {Footer} from '../Footer'

function App() {
  return (
    <UserProvider>
      <h1>Hypetrain</h1>
      <Router />
      <Footer />
      <GlobalStyles />
    </UserProvider>
  )
}

export {App}
