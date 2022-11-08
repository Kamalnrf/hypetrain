import {useUser} from '../components/UserProvider'
import styled from 'styled-components'
import {ReactComponent as LogoutIcon} from '../assets/logout.svg'
import {ReactComponent as DeleteIcon} from '../assets/delete.svg'
import {QUERIES} from '../constants'

export default function Home() {
  const {logout} = useUser()

  return (
    <Actions>
      <ItemWrapper onClick={logout}>
        <IconContainer>
          <LogoutIcon width={72} />
        </IconContainer>
        logout
      </ItemWrapper>
      <ItemWrapper>
        <IconContainer>
          <DeleteIcon width={84} />
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
