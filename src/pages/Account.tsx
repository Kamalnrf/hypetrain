import {useEffect, useState} from 'react'
import {useUser} from '../components/UserProvider'
import styled from 'styled-components'
import {ReactComponent as LogoutIcon} from '../assets/logout.svg'
import {ReactComponent as DeleteIcon} from '../assets/delete.svg'
import {QUERIES} from '../constants'

export default function Home() {
  const mobileMatch = window.matchMedia(QUERIES.mobile)
  const {logout} = useUser()
  const [isMobile, setMobile] = useState(mobileMatch.matches)

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setMobile(event.matches)
    }
    mobileMatch.addEventListener('change', onChange)

    return () => {
      mobileMatch.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <Actions>
      <ItemWrapper onClick={logout}>
        <IconContainer>
          <LogoutIcon width={isMobile ? 52 : 72} height={'auto'} />
        </IconContainer>
        logout
      </ItemWrapper>
      <ItemWrapper>
        <IconContainer>
          <DeleteIcon width={isMobile ? 64 : 84} />
        </IconContainer>
        delete
      </ItemWrapper>
    </Actions>
  )
}

const Actions = styled.div`
  color: var(--white);
  font-size: 2rem;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
    margin-inline-start: 16px;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 12px;

  @media ${QUERIES.mobile} {
    margin-block-end: 24px;
  }
`

const IconContainer = styled.div`
  width: 92px;
  margin-inline-end: 24px;

  @media ${QUERIES.mobile} {
    display: flex;
    align-items: center;
    width: 64px;
  }
`
