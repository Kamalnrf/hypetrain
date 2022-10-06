import {Link} from 'react-router-dom'
import {useUser} from '../components/UserProvider'

export default function Home() {
  const {username} = useUser()
  return (
    <>
      <p>Authenticated</p>
      <Link to={`/${username}`}>Home</Link>
      <Link to={'/activity'}>Activity</Link>
    </>
  )
}
