import {Routes, Route} from 'react-router-dom'
import Landing from '../../pages/Landing'
import Callback from '../../pages/Callback'
import NotFound from '../../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
