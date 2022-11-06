import {Routes, Route} from 'react-router-dom'
import Landing from '../../pages/Landing'
import Callback from '../../pages/Callback'
import NotFound from '../../pages/NotFound'
import Home from '../../pages/Home'
import Activity from '../../pages/Activity'
import Account from '../../pages/Account'
import Help from '../../pages/Help'
import {Layout} from '../Layout'
import {useUser} from '../UserProvider'
import {DashboardLayout} from '../DashboardLayout'

function UnAuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

function AuthenticatedRoutes() {
  const {username} = useUser()
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path={`/${username}`} element={<Home />} />
          <Route path={'/account'} element={<Account />} />
        </Route>
        <Route path="/activity" element={<Activity />} />
        <Route path="/help" element={<Help />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export function AppRouter() {
  const {isUserSignedIn} = useUser()

  if (isUserSignedIn) {
    return <AuthenticatedRoutes />
  }

  return <UnAuthenticatedRoutes />
}
