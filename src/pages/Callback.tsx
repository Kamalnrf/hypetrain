import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {useUser} from '../components/UserProvider'

type ErrorResponse = {
  success: false
  code?: string
  error?: {
    message?: string
  }
}

type SusscessResponse = {
  success: true
  data: UserData
}

type CreateUserResponse = SusscessResponse | ErrorResponse

type UserData = {
  name: string
  token: string
  username: string
}

export default function CallBackPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const code = params.get('code')
  const navigate = useNavigate()
  const {setUserDetails} = useUser()

  useEffect(() => {
    const createUser = () => {
      console.log('CODE =>', code)
      fetch('https://dark-night-380.fly.dev/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
        }),
      })
        .then(res => res.json())
        .then((res: CreateUserResponse) => {
          if (res.success) {
            setUserDetails(res.data)
            navigate(`/${res.data.username}`)
          }
        })
    }

    if (code) {
      createUser()
    }
  }, [code, setUserDetails, navigate])

  if (!Boolean(code)) {
    return <p>Authorization Failed</p>
  }

  return (
    <div>
      <h1>Authorization</h1>
      <p>{code}</p>
    </div>
  )
}
