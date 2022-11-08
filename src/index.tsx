import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/App'
import reportWebVitals from './reportWebVitals'
import * as Sentry from '@sentry/react'
import {BrowserTracing} from '@sentry/tracing'

Sentry.init({
  dsn: 'https://4c34b259dd2b4872a0a8ff9706cac03c@o4504124217491456.ingest.sentry.io/4504124219523072',
  integrations: [new BrowserTracing()],
  environment: process.env.REACT_APP_SENTRY_ENVIROMENT,
  debug: process.env.REACT_APP_SENTRY_ENVIROMENT !== 'production',
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
