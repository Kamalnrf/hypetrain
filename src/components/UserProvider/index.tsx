import {createContext, useState, useContext} from 'react'

type UserDetails = {
  name: string
  token: string
  username: string
}

type ContextValues = {
  isUserSignedIn: boolean
  setUserDetails: (userDetails: UserDetails) => void
} & UserDetails

type Props = {
  children: React.ReactNode
}

const UserConext = createContext<null | ContextValues>(null)

function UserProvider({children}: Props) {
  const userInLocalStorage = JSON.parse(localStorage.getItem('user') ?? '{}')
  const [user, setUser] = useState<UserDetails>(userInLocalStorage)

  const setUserDetails = (userDetails: UserDetails) => {
    localStorage.setItem('user', JSON.stringify(userDetails))
    setUser(userDetails)
  }

  const value = {
    ...user,
    isUserSignedIn: Boolean(user.token),
    setUserDetails,
  }

  return <UserConext.Provider value={value}>{children}</UserConext.Provider>
}

function useUser() {
  const context = useContext(UserConext)

  if (context === null) {
    throw 'useUser must be used within UserPrvoider'
  }

  return context
}

export {useUser, UserProvider}
