import {Routes, Route} from 'react-router-dom'
import Landing from '../../pages/Landing'
import Callback from '../../pages/Callback'
import NotFound from '../../pages/NotFound'
import Home from '../../pages/Home'
import Activity from '../../pages/Activity'
import {useUser} from '../UserProvider'
import {MaxWidthWrapper} from '../MaxWidthWrapper'

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
        <Route path="/" element={<Home />} />
        <Route path={`/${username}`} element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

type LayoutProps = {
  children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <MaxWidthWrapper>
      <main>{children}</main>
    </MaxWidthWrapper>
  )
}

export function AppRouter() {
  const {isUserSignedIn} = useUser()

  if (isUserSignedIn) {
    return <AuthenticatedRoutes />
  }

  return <UnAuthenticatedRoutes />
}
