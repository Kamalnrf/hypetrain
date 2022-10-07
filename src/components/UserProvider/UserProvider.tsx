import {createContext, useState, useContext, useLayoutEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {client} from '../../utils/api'

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
  const tokenInLocalStorage = localStorage.getItem('user_token')
  const userLocalStorage = JSON.parse(localStorage.getItem('user') ?? '{}')
  const [token, setToken] = useState(tokenInLocalStorage)
  const [user, setUser] = useState<UserDetails | {}>(userLocalStorage)

  const setUserDetails = ({
    token,
    ...userDetails
  }: UserDetails & {token: string}) => {
    localStorage.setItem('user', JSON.stringify(userDetails))
    localStorage.setItem('user_token', token)
    setToken(token)
    setUser(userDetails)
  }

  useLayoutEffect(() => {
    if (token) {
      client<UserDetails>('me')
        .then(res => {
          if (res.success) {
            setUser(res.data)
            localStorage.setItem('user', JSON.stringify(res))
          }
        })
        .catch(console.error)
    }
  }, [token, setUser])

  const logout = () => {
    setUser({})
    setToken('')
    localStorage.removeItem('user_token')
    localStorage.removeItem('user')
    navigate('/')
  }

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
