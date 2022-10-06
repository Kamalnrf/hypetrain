import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Landing from '../../pages/Landing'
import Callback from '../../pages/Callback'
import NotFound from '../../pages/NotFound'
import Home from '../../pages/Home'
import Activity from '../../pages/Activity'
import {useUser} from '../UserProvider'

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
  return (
    <Routes>
      <Route path="/:userid" element={<Home />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default function AppRoutes() {
  const {isUserSignedIn} = useUser()

  return (
    <BrowserRouter>
      {isUserSignedIn ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
    </BrowserRouter>
  )
}
