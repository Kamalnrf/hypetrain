import {useUser} from '../components/UserProvider'
import styled from 'styled-components'
import {ReactComponent as LogoutIcon} from '../assets/logout.svg'
import {ReactComponent as DeleteIcon} from '../assets/delete.svg'
import {QUERIES} from '../constants'

export default function Home() {
  const {logout} = useUser()

  return (
    <>
      <Actions>
        <ItemWrapper onClick={logout}>
          <IconContainer>
            <LogoutIcon width={108} height={84} />
          </IconContainer>
          logout
        </ItemWrapper>
        <ItemWrapper>
          <IconContainer>
            <StyledDeleteIcon width={128} height={128} />
          </IconContainer>
          delete
        </ItemWrapper>
      </Actions>
    </>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 32px;
`

const Actions = styled.div`
  color: var(--white);
  font-size: 3rem;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
  }
`

const IconContainer = styled.div`
  max-width: 144px;
  height: 72px;
  margin-inline-end: 24px;

  @media ${QUERIES.mobile} {
    display: flex;
    align-items: center;
    width: 76px;
    height: 48px;
  }
`

const StyledDeleteIcon = styled(DeleteIcon)`
  margin-block-start: -24px;
  margin-inline-end: -20px;
`
