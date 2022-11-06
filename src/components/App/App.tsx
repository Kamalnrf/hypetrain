import React from 'react'
import {GlobalStyles} from '../GobalStyles'
import {UserProvider} from '../UserProvider'
import {AppRouter as Router} from '../AppRouter'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <GlobalStyles />
          <Router />
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export {App}
