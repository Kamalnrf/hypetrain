import React from 'react'
import GlobalStyles from '../GobalStyles'
import {UserProvider} from '../UserProvider'
import Router from '../AppRouter'

function App() {
  return (
    <UserProvider>
      <h1>Hypetrain</h1>
      <Router />
      <GlobalStyles />
    </UserProvider>
  )
}

export default App
