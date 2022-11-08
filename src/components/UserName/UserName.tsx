import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as LeftHighlight} from '../../assets/left-highlight.svg'
import {ReactComponent as RightHighlight} from '../../assets/right-highlight.svg'
import {useUser} from '../UserProvider'
import {QUERIES} from '../../constants'

function UserName() {
  const {username} = useUser()

  return (
    <NameContainer>
      <StyledLeftHighlight />
      <Name>
        <StyledLink to={'account'} title={username}>
          @{username}!
        </StyledLink>
      </Name>
      <StyledRightHighlight />
    </NameContainer>
  )
}

const NameContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Name = styled.div`
  color: var(--lavender);
  font-weight: var(--font-weight-semibold);
  text-overflow: ellipsis;
  overflow: hidden;
  width: 14ch;
  max-width: 100%;
  width: fit-content;
`

const StyledLeftHighlight = styled(LeftHighlight)`
  width: 44px;
  position: absolute;
  left: -28px;
  top: -16px;

  @media ${QUERIES.mobile} {
    width: 32px;
    left: -20px;
    top: -20px;
  }
`

const StyledRightHighlight = styled(RightHighlight)`
  width: 44px;
  position: absolute;
  right: -48px;
  top: -20px;

  @media ${QUERIES.mobile} {
    width: 32px;
    right: -32px;
    top: -24px;
  }
`

export {UserName}
