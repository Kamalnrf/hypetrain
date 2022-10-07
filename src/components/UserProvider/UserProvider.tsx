import {createContext, useState, useContext, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {client} from '../../utils/api'
import {getUserToken} from '../../utils/getUserToken'
import {TOKEN_LOCAL_STORAGE, USER_LOCAL_STORAGE} from '../../constants'
import {useQuery} from 'react-query'

type UserDetails = {
  name: string
  username: string
}

type ContextValues = {
  isUserSignedIn: boolean
  setUserDetails: (userDetails: UserDetails & {token: string}) => void
  logout: () => void
} & Partial<UserDetails>

type Props = {
  children: React.ReactNode
}

const UserConext = createContext<null | ContextValues>(null)

function UserProvider({children}: Props) {
  const navigate = useNavigate()
  const token = getUserToken()
  const userLocalStorage = JSON.parse(localStorage.getItem('user') ?? '{}')
  const [user, setUser] = useState<UserDetails | null>(userLocalStorage)

  const setUserDetails = useCallback(
    ({token, ...userDetails}: UserDetails & {token?: string}) => {
      if (token) {
        localStorage.setItem(TOKEN_LOCAL_STORAGE, token)
      }
      localStorage.setItem(USER_LOCAL_STORAGE, JSON.stringify(userDetails))
      setUser(userDetails)
    },
    [setUser],
  )

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem(TOKEN_LOCAL_STORAGE)
    localStorage.removeItem(USER_LOCAL_STORAGE)
    navigate('/')
  }, [setUser, navigate])

  useQuery('user_details', () => client<UserDetails>('me'), {
    onSuccess: res => {
      if (res.success) {
        setUserDetails(res.data)
      } else if (res.error.code === 'invalid_token') {
        logout()
      }
    },
    enabled: Boolean(token),
  })

  const value = {
    ...(user ?? {}),
    isUserSignedIn: Boolean(token),
    setUserDetails,
    logout,
  }

  return <UserConext.Provider value={value}>{children}</UserConext.Provider>
}

function useUser() {
  const context = useContext(UserConext)

  if (context === null) {
    throw new Error('useUser must be used within UserPrvoider')
  }

  return context
}

export {useUser, UserProvider}
