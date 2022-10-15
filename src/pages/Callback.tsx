import {useLocation, useNavigate} from 'react-router-dom'
import {useUser} from '../components/UserProvider'
import {client, ErrorResponse, Response} from '../utils/api'
import {MaxWidthWrapper} from '../components/MaxWidthWrapper'
import {useQuery} from 'react-query'
import {SignInButton} from '../components/SignInButton'

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

  const {isSuccess, isLoading, isError, error} = useQuery<
    Response<UserData>,
    ErrorResponse
  >(
    'twitter-authorization-code',
    () =>
      client<UserData>('register', {
        data: {code, redirectURI: process.env.REACT_APP_TWITTER_REDIRECT_URI},
      }),
    {
      onSuccess: res => {
        if (res.success) {
          setUserDetails(res.data)
          navigate(`/${res.data.username}`)
        }
      },
      enabled: Boolean(code),
    },
  )

  console.log(isSuccess, isLoading, error)

  return (
    <MaxWidthWrapper>
      {isLoading ? (
        <h1>Completing Authorization</h1>
      ) : (
        <h1>
          {isSuccess ? 'Authorization Compeleted' : 'Authorziation Failed'}
        </h1>
      )}
      {isError ? (
        <div>
          <p>{error.error.message}</p>
          <p>Try Signing in with Twitter Again</p>
          <SignInButton />
        </div>
      ) : (
        <></>
      )}
    </MaxWidthWrapper>
  )
}
