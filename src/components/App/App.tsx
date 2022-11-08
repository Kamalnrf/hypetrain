import React from 'react'
import {GlobalStyles} from '../GobalStyles'
import {UserProvider} from '../UserProvider'
import {AppRouter as Router} from '../AppRouter'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ErrorBoundary} from '@sentry/react'

const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary showDialog>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <GlobalStyles />
            <Router />
          </UserProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export {App}
