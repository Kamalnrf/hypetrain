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
      <Name to={'account'} title={username}>
        @{username}!
      </Name>
      <StyledRightHighlight />
    </NameContainer>
  )
}

const NameContainer = styled.div`
  position: relative;
  display: inline-block;
  word-break: break-all;
  max-width: 11.5ch;
  width: fit-content;

  @media ${QUERIES.mobile} {
    max-width: 9.5ch;
  }

  @media ${QUERIES.sMobile} {
    max-width: 7.5ch;
  }
`

const Name = styled(Link)`
  color: var(--lavender);
  font-weight: var(--font-weight-semibold);
  text-overflow: ellipsis;
  overflow: hidden;
  width: fit-content;
  max-width: 100%;
  text-decoration: none;
`

const StyledLeftHighlight = styled(LeftHighlight)`
  width: 44px;
  position: absolute;
  left: -28px;
  top: -16px;
  color: var(--blue);

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
  color: var(--blue);

  @media ${QUERIES.mobile} {
    width: 32px;
    right: -32px;
    top: -24px;
  }
`

export {UserName}
