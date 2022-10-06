import {createContext, useState, useContext} from 'react'

type State = {
  name: string
  token: string
  username: string
}

type ContexValues = {
  isUserSignedIn: boolean
  setUser: React.Dispatch<React.SetStateAction<State>>
} & State

type Props = {
  children: React.ReactNode
}

const UserConext = createContext<null | ContexValues>(null)

function UserProvider({children}: Props) {
  const userInLocalStorage = JSON.parse(localStorage.getItem('user') ?? '{}')
  const [user, setUser] = useState<State>(userInLocalStorage)
  const value = {
    ...user,
    isUserSignedIn: Boolean(user.token),
    setUser,
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
