import styled from 'styled-components'
import {useMatch} from 'react-router-dom'
import {QUERIES} from '../../constants'
import {Menu} from './Menu'
import {ReactComponent as Sparkle} from '../../assets/sparkle.svg'
import {UserName} from '../UserName'
import {GoBack} from './GoBack'

function Header() {
  const isHome = useMatch('/')

  return (
    <Wrapper>
      <Menu />
      {!Boolean(isHome) ? (
        <GoBack />
      ) : (
        <WelcomeMessage>
          <Greetings>
            <StyledSparkle />
            hello,
          </Greetings>
          <UserName />
        </WelcomeMessage>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  @media ${QUERIES.mobile} {
    margin-inline-start: 16px;
  }
`

const WelcomeMessage = styled.h1`
  color: var(--white);
  font-weight: var(--font-weight-regular);
  font-size: 4rem;
  line-height: 1.15;
  margin-block-start: 80px;
  margin-block-end: 48px;

  @media ${QUERIES.mobile} {
    font-size: 3rem;
    margin-block-start: 15vh;
    margin-block-end: 32px;
  }
`

const StyledSparkle = styled(Sparkle)`
  width: 44px;

  @media ${QUERIES.mobile} {
    width: 32px;
  }
`

const Greetings = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -32px;
    left: -36px;
  }

  @media ${QUERIES.mobile} {
    svg {
      top: -32px;
      left: -26px;
    }
  }
`

export {Header}
